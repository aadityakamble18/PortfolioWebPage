import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Presentation, FileText, Download, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/project/smart-luggage")({
  component: SmartLuggageProjectPage,
});

function SmartLuggageProjectPage() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if arrow up or down is pressed
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll(".paper-section"));

        if (sections.length === 0) return;

        // Find the index of the current section in view
        let currentIdx = -1;
        for (let i = 0; i < sections.length; i++) {
          const rect = sections[i].getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            currentIdx = i;
            break;
          }
        }

        if (currentIdx === -1) {
          currentIdx = 0; // fallback
        }

        if (e.key === "ArrowDown" && currentIdx < sections.length - 1) {
          sections[currentIdx + 1].scrollIntoView({ behavior: "smooth" });
        } else if (e.key === "ArrowUp") {
          const rect = sections[currentIdx].getBoundingClientRect();
          if (rect.top < -50) {
            sections[currentIdx].scrollIntoView({ behavior: "smooth" });
          } else if (currentIdx > 0) {
            sections[currentIdx - 1].scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground scroll-smooth">
      <main className="relative z-10">
        <div className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-20 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Aaditya Kamble</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <span>/</span>
              <Link to="/project/smart-luggage" className="text-foreground hover:text-primary transition-colors">Smart Luggage</Link>
            </nav>

            {/* Slide 1: Title */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <div className="mb-4 w-full text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  June 2023
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.2] tracking-tight text-foreground md:text-5xl lg:text-6xl text-center">
                Biometric Immobilization of Smart Luggage
              </h1>

              <div className="mt-12 flex flex-col justify-center gap-4 text-center">
                <div>
                  <p className="font-semibold">Group B: Aaditya, Neermita, Harish, Prince, Aiswarya, Khushi, Kanishk</p>
                  <p className="text-sm text-muted-foreground">Instructors: Dr. Amit Sharma, Dr. Abhilasha Maheshwari</p>
                  <p className="text-sm text-muted-foreground">Mentors: Dr. Arpit Khandelwal, Dr. Arani Ali Khan</p>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="https://github.com/aadityakamble18/Smart-Suitcase"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#CC0B24] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#A8091D]"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repository
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href="https://www.canva.com/design/DAHVhrYfxzY/a_GB6sGGPsiZLk7UNeYu0Q/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <Presentation className="h-4 w-4" />
                  View Presentation
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
              </div>
            </section>

            {/* Slide 2: Abstract */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Abstract</h2>
              <p>
                Baggage misplacement and theft at airport claim areas represent significant security vulnerabilities. Annually, 1.4 million bags are lost globally, and over 21.5 million checked bags are not returned in due time. This report details a comprehensive engineering solution to combat luggage theft at its initial stage. By integrating an optical fingerprint scanner, a microcontroller, and a high-voltage solenoid actuator, the system physically locks a suitcase's telescopic handle, rendering it virtually impossible to transport without authorized biometric verification. This document covers prototype hardware design, software architecture, mechanical fabrication, and strategic roadmaps for scaling into automated mass production.
              </p>
            </section>

            {/* Presentation Embed */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Presentation</h2>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-md">
                <iframe
                  loading="lazy"
                  style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                  src="https://www.canva.com/design/DAHVhrYfxzY/a_GB6sGGPsiZLk7UNeYu0Q/view?embed"
                  allowFullScreen
                  allow="fullscreen">
                </iframe>
              </div>
            </section>

            {/* Slide 3: Intro */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">1 Project Background and Motivation</h2>
              <p className="mb-4">
                The primary motivation for this project stems from a critical vulnerability in global airport security: the baggage claim process. Once luggage reaches the carousel, any individual can mistakenly or intentionally walk away with a bag. Statistics highlight the severity of this issue; approximately 35% of passengers have found their baggage damaged or missing in India.
              </p>
              <p className="mb-4">
                Current smart luggage solutions focus on GPS tracking chips and fingerprint-enabled zipper locks. However, these are fundamentally flawed as standalone security measures. GPS tracking is reactive and only utilized after a theft has occurred, while zipper locks secure the internal contents but do not prevent an individual from physically stealing the entire bag. This project proposes a proactive solution: utilizing biometric authentication to lock the telescopic handle, thereby preventing the bag from being comfortably rolled away.
              </p>
            </section>
            
            {/* Slide 4: System Architecture */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">2 System Architecture and Hardware Selection</h2>
              <p className="mb-4">
                The system was engineered to integrate smoothly inside a standard travel suitcase featuring an internally accessible telescopic handle mechanism.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">2.1 Microcontroller and Biometric Input</h3>
              <p className="mb-4">
                An Arduino board acts as the system's central processing unit. For biometric input, an optical fingerprint sensor utilizing UART communication protocols was selected due to its cost-effectiveness over capacitive alternatives. This sensor is capable of scanning, converting, and locally storing up to 127 user fingerprints within its internal memory, reducing the processing load on the Arduino.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">2.2 Actuator and Power Distribution</h3>
              <p className="mb-4">
                The primary mechanical deterrent is a heavy-duty 12V solenoid lock designed to physically block the handle's extension. A significant engineering challenge during the feasibility phase was bridging the low-voltage logic of the microcontroller with the high-voltage requirements of the actuator. Because the Arduino cannot safely output more than 5V, a dual-power architecture was implemented:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Logic Power:</strong> The Arduino is powered independently by a dedicated 9V battery.</li>
                <li><strong>Actuator Power:</strong> An external, isolated battery pack consisting of eight 1.5V AA batteries (yielding 12V total) is wired directly to the solenoid lock.</li>
                <li><strong>Switching Mechanism:</strong> A 5V relay module safely bridges the logic and actuator circuits. The Arduino sends a 5V digital signal to the relay, which then closes the 12V circuit to retract the lock without overloading the microcontroller.</li>
              </ul>
            </section>
            
            {/* Slide 5: Software Implementation */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">3 Software Implementation and Code Mechanics</h2>
              <p className="mb-4">
                The system's firmware was developed in the Arduino IDE, heavily relying on the <code>Adafruit_Fingerprint</code> library. The codebase is structured into strict initialization protocols followed by a continuous authentication loop.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">3.1 System Initialization</h3>
              <p className="mb-4">
                The setup phase defines hardware pins, establishes serial communication, and verifies the sensor's connection.
              </p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm text-foreground mb-4">
<code>{`#include <Adafruit_Fingerprint.h>

#define SENSOR_RX 2
#define SENSOR_TX 3
#define LOCK_PIN 4
#define LED_PIN 5

Adafruit_Fingerprint finger = Adafruit_Fingerprint(&Serial);

void setup() {
  Serial.begin(9600);

  // Define output behavior for logic pins
  pinMode(LOCK_PIN, OUTPUT);
  pinMode(LED_PIN, OUTPUT);

  // Initialize UART communication with sensor
  finger.begin(SENSOR_RX, SENSOR_TX);

  // Diagnostic check to prevent hardware bypass
  if (finger.verifyPassword()) {
    Serial.println("Fingerprint sensor verified.");
  } else {
    Serial.println("Sensor not verified. Check wiring.");
    while (1) {} // Halt the system entirely
  }
}`}</code>
              </pre>
              <p className="text-sm italic text-center mb-4">Listing 1: System Initialization and Sensor Verification</p>
              <p className="mb-4">
                If <code>finger.verifyPassword()</code> fails, the system deliberately enters an infinite loop, freezing operations to maintain a fail-secure state.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">3.2 Biometric Authentication Loop</h3>
              <p className="mb-4">
                The main code continuously polls the sensor, comparing live inputs against the stored templates.
              </p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm text-foreground mb-4">
<code>{`void loop() {
  if (finger.getImage()) {
    // Process raw image into a standardized digital template
    finger.image2Tz();

    // Fast search the onboard database
    if (finger.fingerFastSearch() == FINGERPRINT_OK) {
      uint8_t id = finger.fingerID;

      // Access Granted: Trigger relay and activate status LED
      digitalWrite(LOCK_PIN, HIGH);
      digitalWrite(LED_PIN, HIGH);

      // Hold the lock open for 5 seconds to allow extension
      delay(5000);

      // Re-engage the lock mechanism
      digitalWrite(LOCK_PIN, LOW);
      digitalWrite(LED_PIN, LOW);
    } else {
      // Access Denied: Keep relay open, flash LED indicator
      digitalWrite(LOCK_PIN, LOW);
      digitalWrite(LED_PIN, HIGH);
      delay(5000);
      digitalWrite(LED_PIN, LOW);
    }
  }
}`}</code>
              </pre>
              <p className="text-sm italic text-center mb-4">Listing 2: Biometric Matching and Relay Actuation Logic</p>
              <p className="mb-4">
                If a template match is confirmed, a HIGH signal is sent to <code>LOCK_PIN</code>, triggering the relay to retract the solenoid for exactly 5000 milliseconds (5 seconds). If access is denied, the lock remains firmly engaged.
              </p>
            </section>
            
            {/* Slide 6: Fabrication and Production */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">4 Prototype Fabrication and Mechanical Assembly</h2>
              <p className="mb-4">
                To house the electronics securely without compromising the suitcase's structural integrity or luggage capacity, custom modifications were executed.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Base Construction:</strong> A custom-sized wooden plank was installed beneath the interior lining of the suitcase to serve as a rigid mounting board for the Arduino, relay, and battery packs, preventing component shift during travel.</li>
                <li><strong>Actuator Machining:</strong> Precision drilling was performed on the metallic tubing of the telescopic handle. A hole was created to allow the solenoid pin to insert directly into the handle's sliding mechanism, physically locking it in place.</li>
                <li><strong>Sensor Integration:</strong> An aperture was cut into the exterior shell of the suitcase near the handle housing, allowing the fingerprint sensor to sit flush with the exterior for user access.</li>
              </ul>
              
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider mt-12">5 Transition to Automated Mass Production</h2>
              <p className="mb-4">
                Moving from a proof-of-concept prototype to a commercially viable product requires replacing manual workshop techniques with standardized, automated production lines to minimize human error and drastically reduce per-unit cost.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">5.1 PCB Fabrication and Surface Mount Technology</h3>
              <p className="mb-4">
                The manual wiring and standard Arduino microcontroller boards must be engineered into a unified, miniature architecture.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Custom PCB:</strong> Consolidating the microprocessor, relay circuits, and power management modules onto a single Printed Circuit Board (PCB).</li>
                <li><strong>SMT Automation:</strong> Employing "pick-and-place" Surface Mount Technology (SMT) machines to rapidly populate the PCB with micro-components, followed by automated reflow soldering ovens to guarantee consistent bonds.</li>
              </ul>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">5.2 Automated Mechanical Machining</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Injection Molding:</strong> Replacing the wooden mounting plank with custom, injection-molded ABS plastic housings that allow the PCB and battery arrays to snap into place without complex hardware.</li>
                <li><strong>CNC Machining:</strong> Deploying Computer Numerical Control (CNC) systems to rapidly and uniformly machine the locking apertures into the metallic telescopic handle tubes at high tolerances.</li>
              </ul>
            </section>
            
            {/* Slide 7: Commercial Strategy & Conclusion */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">6 Commercial Strategy and Market Analysis</h2>
              <p className="mb-4">
                Positioning the Smart-Suitcase effectively requires balancing premium aesthetics, mechanical durability, and unit cost profitability. The target demographic consists of frequent corporate flyers, international tech-savvy millennials, and luxury travelers prioritizing absolute security.
              </p>
              
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">6.1 Material Selection and Unit Economics</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Exterior Shell (35%-45% of Cost):</strong> 100% Polycarbonate (PC) is recommended for bulk sourcing. It is highly lightweight and offers superior impact resistance compared to standard ABS.</li>
                <li><strong>Telescopic Handle (20%-30% of Cost):</strong> High-gauge anodized aluminum is mandatory. The handle mechanism must withstand the mechanical shear force of the internal solenoid lock pin; standard hollow plastics will fail under stress.</li>
                <li><strong>Electronics (15%-20% of Cost):</strong> Utilizing automated PCB fabrication (rather than buying off-the-shelf development boards) and Automated Optical Inspection (AOI) to reduce defect rates ensures sustainable profit margins at scale.</li>
              </ul>
              
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider mt-12">7 Conclusion</h2>
              <p className="mb-4">
                The biometric immobilization of a luggage handle represents a highly viable and proactive anti-theft solution. By effectively bridging low-voltage logic processing with high-voltage mechanical actuation, absolute physical security is guaranteed. Transitioning this concept toward mass production using SMT electronics, CNC machining, and optimized material sourcing presents a highly scalable and profitable path forward in the rapidly growing smart luggage market.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
