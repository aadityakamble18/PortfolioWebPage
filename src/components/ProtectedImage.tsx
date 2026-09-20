import { useState, useEffect } from "react";
import { X as CloseIcon, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface ProtectedImageProps {
  src: string;
  alt: string;
}

export function ProtectedImage({ src, alt }: ProtectedImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent PrintScreen key
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText(''); // Attempt to clear clipboard
        e.preventDefault();
        setIsOpen(false);
      }
      
      // Prevent Mac screenshot shortcuts (Cmd+Shift+3,4,5), Ctrl+P, Ctrl+S
      if ((e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key)) || 
          (e.ctrlKey && e.key === 'p') || (e.metaKey && e.key === 'p') || 
          (e.ctrlKey && e.key === 's') || (e.metaKey && e.key === 's')) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    // Very aggressive protection: if the window loses focus (e.g., Windows Snipping Tool or Mac screen record overlay opens), hide the image immediately.
    const handleBlur = () => {
      setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleBlur);
    };
  }, [isOpen]);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.max(prev - 0.5, 1)); // Min 1x scale to prevent shrinking too small when panning
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }, 300);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div 
        className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border overflow-hidden cursor-pointer group relative"
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-0 z-10" onContextMenu={(e) => e.preventDefault()} />
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 select-none pointer-events-none"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 pointer-events-none">
          <span className="text-white font-medium">Click to view</span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8">
          <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-3 z-50">
            <button 
              onClick={handleZoomOut}
              className="text-white hover:text-primary transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              title="Zoom Out"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
            <button 
              onClick={handleReset}
              className="text-white hover:text-primary transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              title="Reset Zoom"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
            <button 
              onClick={handleZoomIn}
              className="text-white hover:text-primary transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              title="Zoom In"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
            <div className="w-px h-6 bg-white/20 mx-2" />
            <button 
              onClick={handleClose}
              className="text-white hover:text-red-500 transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              title="Close"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          
          <div 
            className="relative max-w-[95vw] max-h-[90vh] w-full h-full flex items-center justify-center select-none overflow-hidden touch-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="absolute inset-0 z-10" />
            
            <div 
              style={{ 
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, 
                transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
              className="origin-center flex items-center justify-center h-full w-full"
            >
              <img 
                src={src} 
                alt={alt} 
                className="max-w-full max-h-[90vh] object-contain pointer-events-none shadow-2xl rounded-md"
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
