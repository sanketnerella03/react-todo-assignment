import React, {useState} from 'react';
import './add-form.styles.css';

const AddFormComponent = ({handleCreateRequest}) => {
    const [title, updateTitle] = useState('');
    const [dueDate, updateDueDate] = useState();
    const today = new Date();
    const minDate = `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? ('0' + (today.getMonth() + 1)) : today.getMonth() + 1}-${today.getDate() < 10 ? ('0' + (today.getDate())) : (today.getDate())}`;
    console.log("min date", minDate);
    const handleSave = (event) => {
        handleCreateRequest({title, dueDate});
        event.preventDefault();
    }
    const handleTitleChange = (event) => {
        updateTitle(event.target.value);
    }
    const handleDueDateChange = (event) => {
        console.log("Due date change", event.target.value);
        updateDueDate(event.target.value);
    }
    return (
        <form onSubmit={handleSave}>
        <div className='shadow rounded add-form-section'>
            
            <div className="title-input">
                <input required maxLength="30" className='form-control' value={title} onChange={handleTitleChange} type="text" placeholder='Title' />
            </div>
            <div className="date-input">
                <input required className='form-control' onChange={handleDueDateChange} type="date" min={minDate} placeholder='Due date' />
            </div>
            <div className="save-action">
                <button type='submit' className='btn btn-primary'> Save </button>
            </div>
            
        </div>
        </form>
    );
}

export default AddFormComponent;