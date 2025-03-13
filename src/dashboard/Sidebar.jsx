import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { FiHome, FiSettings, FiUser } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="home">
          <AccordionTrigger>
            <FiHome /> Dashboard
          </AccordionTrigger>
          <AccordionContent>
            <p>Dashboard overview and stats</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="settings">
          <AccordionTrigger>
            <FiSettings /> Settings
          </AccordionTrigger>
          <AccordionContent>
            <p>Account settings</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="profile">
          <AccordionTrigger>
            <FiUser /> Profile
          </AccordionTrigger>
          <AccordionContent>
            <p>User profile information</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sidebar;
