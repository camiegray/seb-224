// src/components/FounderListItem/FounderListItem.jsx

const FounderListItem = (props) => {
    const { founder } = props
    return (
      <li>
        <h3>Hello, I'm {founder.name} the {founder.title}!</h3>
        <p>{founder.credential}</p>
      </li>
    );
  };
  
  export default FounderListItem;
  