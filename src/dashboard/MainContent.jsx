import { Card } from '@radix-ui/react-card';
import Overview from './Overview';  // Importera din Overview.jsx

const MainContent = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Card className="p-4 bg-white shadow-md w-96">
        <Overview /> {/* Din diagramkomponent */}
      </Card>

      <Card className="p-4 bg-white shadow-md w-96">
        <h2>Status Card</h2>
        <p>Status information goes here.</p>
      </Card>

      {/* Lägg till fler kort eller innehåll här */}
    </div>
  );
};

export default MainContent;
