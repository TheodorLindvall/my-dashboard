import { ThemeProvider } from '@radix-ui/themes';

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </ThemeProvider>
  );
};
