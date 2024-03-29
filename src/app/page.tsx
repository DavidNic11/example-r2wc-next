import PostDetails from "../shared/components/PostDetails";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <PostDetails
        postHref="/space-travel"
        description="Space travel is rapidly advancing, with innovations in technology enabling longer, safer missions beyond Earth's orbit. Private companies, alongside governmental space agencies, are at the forefront of developing sustainable space tourism and exploration initiatives. As humanity stands on the cusp of becoming an interplanetary species, the ethical and environmental implications of space colonization are becoming increasingly important discussions in the scientific community and beyond."
      />
      <PostDetails
        postHref="/space-fights"
        description="Space fights, a concept often explored in science fiction, are gradually entering discussions in military and defense circles as nations and private entities increase their presence in space. The development of anti-satellite weapons and space-based defense systems highlights the strategic importance of space as the next frontier for national security. As international treaties and laws lag behind these advancements, the need for comprehensive space warfare regulations and peaceful coexistence strategies is more pressing than ever."
      />
    </main>
  );
}
