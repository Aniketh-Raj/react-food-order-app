import classes from "./MealItemForm.module.css";
import Input from '../../UI/Input';

const MealItemForm = (props) => {

    const amountid = 'amount' + props.id;

  return (
    <form className = {classes.form}>
        <Input label='Amount' input={{
            id:amountid,
            type: 'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;