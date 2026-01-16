import { useEffect } from 'react';
import { useAppSelector } from './store';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/global.scss';

const App = (): React.JSX.Element => {
  const themeMode = useAppSelector((state) => state.theme.mode);
  const fontSize = useAppSelector((state) => state.ui.fontSize);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  useEffect(() => {
    const fontSizeMap: Record<string, string> = {
      small: '14px',
      medium: '16px',
      large: '18px',
    };
    document.documentElement.style.setProperty(
      '--base-font-size',
      fontSizeMap[fontSize]
    );
  }, [fontSize]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        {/* Future sections: Timeline, Projects, Contact */}
      </main>
    </>
  );
};

export default App;
