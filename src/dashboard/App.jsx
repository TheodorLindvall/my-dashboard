import { ThemeProvider } from '@radix-ui/themes';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <MainContent />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
