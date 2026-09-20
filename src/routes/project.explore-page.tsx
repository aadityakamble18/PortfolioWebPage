import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Presentation, FileText, Download, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/project/explore-page")({
  component: ExplorePageProjectPage,
});

function ExplorePageProjectPage() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll(".paper-section"));

        if (sections.length === 0) return;

        let currentIdx = -1;
        for (let i = 0; i < sections.length; i++) {
          const rect = sections[i].getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            currentIdx = i;
            break;
          }
        }

        if (currentIdx === -1) {
          currentIdx = 0;
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
              <Link to="/project/explore-page" className="text-foreground hover:text-primary transition-colors">Instagram Discoverability</Link>
            </nav>

            {/* Title Section */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <div className="mb-4 w-full text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  November 2023
                </span>
              </div>
              <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.2] tracking-tight text-foreground md:text-5xl lg:text-6xl text-center">
                Analysis of Factors Influencing Content Discoverability on Instagram Using Machine Learning
              </h1>

              <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center">
                <div>
                  <p className="font-semibold">Aaditya Kamble</p>
                  <p className="text-sm text-muted-foreground">Department of Metallurgical & Materials Engineering Engineering</p>
                  <p className="text-sm text-muted-foreground">Indian Institute of Technology Jodhpur</p>
                </div>
                <div>
                  <p className="font-semibold">Aditya Mundhada</p>
                  <p className="text-sm text-muted-foreground">Department of Metallurgical & Materials Engineering Engineering</p>
                  <p className="text-sm text-muted-foreground">Indian Institute of Technology Jodhpur</p>
                </div>
                <div>
                  <p className="font-semibold">Vivek Saroj</p>
                  <p className="text-sm text-muted-foreground">Department of Mechanical Engineering</p>
                  <p className="text-sm text-muted-foreground">Indian Institute of Technology Jodhpur</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="https://github.com/aadityakamble18/Explore-Page-Discoverability"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#CC0B24] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#A8091D]"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repository
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href="https://www.canva.com/design/DAHVXPsqIEk/77nJLkc_I_Y2t0JPmzq_gA/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <Presentation className="h-4 w-4" />
                  View Presentation
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
                </a>
                <a
                  href="/src/assets/Explore Page Discoverability/Analysis of Factors Influencing Content Discoverability on Instagram Using Machine Learning.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent"
                >
                  <FileText className="h-4 w-4" />
                  Download Paper
                  <Download className="h-4 w-4 ml-1 opacity-80" />
                </a>
              </div>
            </section>

            {/* Abstract */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Abstract</h2>
              <p>
                Content discoverability is an important aspect of modern social media platforms because it determines how users encounter content beyond the accounts they directly follow. Instagram’s Explore page provides personalized recommendations intended to help users discover potentially relevant content. The exact mechanisms used by commercial recommendation systems are proprietary and depend on a large number of behavioral and content-related variables. Therefore, this study investigates a limited set of observable variables using a machine-learning-based approach.
              </p>
              <p className="mt-4">
                The dataset used in this study contains 7,488 records and 9 columns, with important variables including user ID, photo ID, emoji usage, hashtag count, and comment text. Data preprocessing was performed by checking missing values, converting emoji usage into a binary representation, calculating comment length, and preparing textual information for sentiment analysis. Exploratory data analysis was then conducted to study user activity, hashtag usage, comment length, and content diversity. Sentiment analysis was performed using the TextBlob library.
              </p>
              <p className="mt-4">
                For machine-learning analysis, emoji usage was selected as the target variable, while user ID, photo ID, comment information, and hashtag count were considered as input variables. A Random Forest Regressor was developed as the primary model and a single Decision Tree was used for comparison. Feature-importance analysis was performed to identify variables having greater influence within the model. The analysis indicates that hashtag-related variables show substantial importance, while comment length has comparatively less influence in the implemented model. The findings provide an exploratory view of relationships between social-media interaction characteristics and content-related discoverability.
              </p>
            </section>

            {/* Presentation Embed */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">Presentation</h2>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-md">
                <iframe
                  loading="lazy"
                  style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                  src="https://www.canva.com/design/DAHVXPsqIEk/77nJLkc_I_Y2t0JPmzq_gA/view?embed"
                  allowFullScreen
                  allow="fullscreen">
                </iframe>
              </div>
            </section>

            {/* Section 1 & 2 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">1. Introduction & Objectives</h2>
              <p className="mb-4">
                Social-media platforms have become major sources of information, entertainment, communication, and content creation. The number of posts generated on these platforms is extremely large, making it impossible for users to manually examine all available content. Recommendation systems therefore play an important role in selecting and presenting content that may be relevant to individual users.
              </p>
              <p className="mb-4">
                Instagram provides several mechanisms for content discovery, including its Explore page. For users, effective recommendations can reduce information overload. For content creators, greater discoverability can provide opportunities for increased engagement, audience growth, and recognition. The objective of this project is not to reproduce the complete Instagram recommendation algorithm. Instead, the study examines a limited set of observable variables from a supplied dataset and uses machine-learning techniques to identify patterns within the data.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>To study factors associated with content discoverability.</li>
                <li>To analyze user activity and content diversity.</li>
                <li>To investigate hashtag usage and comment characteristics.</li>
                <li>To perform sentiment analysis on user comments.</li>
                <li>To develop a machine-learning model using the available variables.</li>
                <li>To analyze feature importance and identify limitations of using a small dataset.</li>
              </ul>
            </section>

            {/* Section 3 & 4 & 5 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">2. Dataset & Exploratory Analysis</h2>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Dataset Overview</h3>
              <p className="mb-4">
                The dataset contains 7,488 rows and 9 columns. Important variables identified in the project include user ID, photo ID, emoji usage, hashtag count, and comments. No missing-value imputation was required.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Exploratory Data Analysis (EDA)</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>User ID Distribution:</strong> Most users fall within the 50–100 range of user identifiers, while relatively few observations are associated with values above 250.</li>
                <li><strong>Hashtag Count:</strong> Hashtags are frequently used on social-media platforms to associate content with topics or categories. The analysis indicates that the majority of comments contain one or two hashtags.</li>
                <li><strong>Comment Length:</strong> Investigated as a potential indicator of interaction depth. Longer comments can contain more textual information, however, length alone does not necessarily indicate higher engagement.</li>
                <li><strong>Unique Photo IDs:</strong> Users associated with a higher number of unique Photo IDs were more likely to exhibit patterns associated with greater discoverability.</li>
              </ul>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Sentiment Analysis</h3>
              <p className="mb-4">
                Sentiment analysis was performed to investigate the emotional tone of comments using the TextBlob Python library. The project analysis reports that more than 99 percent of comments were classified as neutral. The strong concentration of observations in the neutral class means that sentiment has limited variation in this dataset.
              </p>
            </section>

            {/* Section 6 & 7 & 8 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">3. Machine Learning Modeling</h2>
              <p className="mb-4">
                The machine-learning component of the project investigates whether observable variables can be used to model emoji usage, acting as an observable interaction characteristic. The project defines emoji usage as the target variable and uses comment information, user ID, photo ID, and hashtag count as input variables.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Models Evaluated</h3>
              <p className="mb-4">
                The project uses a Random Forest Regressor as the primary model and a single Decision Tree for comparison. Random Forest is an ensemble learning technique based on multiple decision trees. For regression, individual trees generate predictions that are combined to obtain a final prediction.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Training and Testing</h3>
              <p className="mb-4">
                The available observations are divided into training and testing sets with an 80:20 split, where approximately 80 percent of the observations are used for training and 20 percent are used for testing. For a regression formulation, common evaluation measures include Mean Squared Error (MSE) and Root Mean Squared Error (RMSE).
              </p>
            </section>

            {/* Section 9 & 10 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">4. Results & Feature Importance</h2>
              <p className="mb-4">
                Feature-importance analysis was performed to understand which available variables contributed most strongly to the trained model.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Hashtag Count:</strong> Showed high importance in the implemented analysis. The importance of hashtag count is particularly relevant because hashtags provide information about the topics associated with content.</li>
                <li><strong>Emoji-related information:</strong> Served as an important interaction signal.</li>
                <li><strong>Comment Length:</strong> Had comparatively limited importance. The initial assumption that longer comments necessarily represent stronger engagement is not strongly supported by the feature analysis.</li>
              </ul>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Insights and Discussion</h3>
              <p className="mb-4">
                These observations suggest that content-related and interaction variables can provide useful information for exploratory discoverability analysis. The Random Forest approach performed better than the single Decision Tree, leveraging an ensemble of predictions.
              </p>
            </section>

            {/* Section 11 & 12 */}
            <section className="paper-section min-h-[70vh] flex flex-col justify-center py-12 border-b border-border/30 text-base leading-relaxed text-muted-foreground md:text-lg text-justify">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6 uppercase tracking-wider">5. Limitations & Future Work</h2>
              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Limitations</h3>
              <p className="mb-4">
                Several limitations must be considered. The dataset contains only 7,488 observations, which is small compared to the scale of interactions processed by a major platform. Furthermore, real-world recommendation systems use many additional variables, including interaction history, viewing behavior, shares, saves, and relationships between users, which were not available in this dataset. Finally, Instagram's recommendation mechanisms are proprietary, making the model an exploratory framework rather than a perfect replica.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6 italic">Future Work</h3>
              <p className="mb-4">
                Future datasets should include direct discoverability measures such as Explore-page impressions, content reach, saves, shares, and engagement rates. Using advanced Natural Language Processing (NLP) techniques like TF-IDF, word embeddings, and transformer-based representations could capture semantic information not available through simple comment-length or polarity measures.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
