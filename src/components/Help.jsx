import React, { useState ,useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const helpTopics = [
  {
    title: "How to place an order?",
    content: "To place an order, select your desired items from the menu, add them to your cart, and proceed to checkout."
  },
  {
    title: "What payment methods are accepted?",
    content: "We accept various payment methods including credit/debit cards, net banking, and mobile wallets."
  },
  {
    title: "How can I track my order?",
    content: "You can track your order status in the 'My Orders' section of the app."
  },
  {
    title: "How to cancel an order?",
    content: "To cancel an order, go to 'My Orders', select the order you want to cancel, and follow the prompts."
  },
  {
    title: "How to contact customer support?",
    content: "You can contact customer support through the app or website by navigating to the 'Help' section."
  }
];

const Help = () => {

  useEffect(()=>{
    document.title="Help";
  },[])
 


  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white p-8 mt-10">
      {/* Image Column */}
      <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0">
        <img
          src="https://blog.swiggy.com/wp-content/uploads/2023/01/War-Room-Blog-1000x486.png"
          alt="Swiggy Help Center"
          className="max-w-full h-auto rounded-3xl"
          style={{ maxHeight: '600px' }} // Adjust the max height if needed
        />
      </div>

      {/* Accordion Column */}
      <div className="flex-1 overflow-auto p-4 rounded-3xl">
        <div className="bg-orange-500 text-white rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Help Center</h2>
          <p className="text-center mb-3">Find answers to your questions below:</p>
          {helpTopics.map((topic, index) => (
            <Accordion
           
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              className="mb-4"
              sx={{
                '&:before': {
                  display: 'none',
                },
                borderRadius: '0.75rem',
                boxShadow: 'none',
          
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                className="bg-white text-black rounded-lg cursor-pointer transition-all"
                sx={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.75rem',
                }}
              >
                <Typography className="text-xl font-semibold">{topic.title}</Typography>
              </AccordionSummary>
              <AccordionDetails
                className="bg-white text-black rounded-b-lg p-4"
                sx={{
                  maxHeight: '150px', // Limit the max height of details
                  overflowY: 'auto', // Add scrollbar if content overflows
                }}
              >
                <Typography>{topic.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
