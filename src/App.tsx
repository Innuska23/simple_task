import { useState } from 'react';
import './App.css';
// import { Accordion } from './components/Accordion/Accordion';
import { Rating, RatingValueType } from './components/Rating/Rating';
import { SelfControlledAccordion } from './components/SelfControlledAccordion/SelfControlledAccordion';
import { UnControlledRating } from './components/UnControlledRating/UnControlledRating';
import { Accordion } from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import { UnControlledOnOff } from './components/UnControlledOnOff/UnControlledOnOff';

//function declaration
function App() {
  console.log("App rendering");

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className='App'>
      {/* <PageTitle title="This is App Component" />
      <Rating value={3} /> */}
      {/* <Accordion title="Menu" collapsed={accordionCollapsed} onChange={() => { setAccordionCollapsed(!accordionCollapsed) }} /> */}
      {/* <Accordion title="Users" collapsed={false} /> */}
      {/* <SelfControlledAccordion title="Menu" /> */}
      {/* <SelfControlledAccordion title='SelfControlledAccordion' /> */}
      {/* <Rating value={ratingValue} onClick={setRatingValue} /> */}
      {/* <UnControlledRating /> */}
      <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
      {/* <OnOff on={switchOn} onChange={() => { setSwitchOn(!switchOn) }} /> */}
    </div>
  );
}

// type PageTitlePropsType = {
//   title: string
// }

// function PageTitle(props: PageTitlePropsType) {
//   console.log("AppTitle rendering");
//   return <h1>{props.title}</h1>
// }


export default App;
