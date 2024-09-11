import { useState } from 'react';
import Select from 'react-select';
import './Questions.scss';
import { BsFillFileEarmarkPlusFill, BsFillFileEarmarkMinusFill } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";

const Questions = (props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedQuiz, setSelectedQuiz] = useState({});
    return (
        <div className="questions-container">
            <div className="title">
                Manage Questions
            </div>
            <hr />
            <div className="add-new-question">
                <div className='col-6 form-group'>
                    <label className='mb-2'>Select Quiz:</label>
                    <Select
                        defaultValue={selectedQuiz}
                        onChange={setSelectedQuiz}
                        options={options}
                    />
                </div>
                <div className='mt-3 mb-2'>
                    Add questions:
                </div>
                <div className='q-main mb-5'>
                    <div className='questions-content'>
                        <div className="form-floating description">
                            <input type="text" className="form-control" placeholder="name@example.com" />
                            <label>Question 's description</label>
                        </div>
                        <div className='group-upload'>
                            <label>
                                <RiImageAddFill className='label-up' />
                            </label>
                            <input type='file' hidden />
                            <span>0 file is uploaded</span>
                        </div>
                        <div className='btn-add'>
                            <span>
                                <BsFillFileEarmarkPlusFill className='icon-add' />
                            </span>
                            <span>
                                <BsFillFileEarmarkMinusFill className='icon-remove' />
                            </span>
                        </div>
                    </div>
                    <div className='answers-content'>
                        <input
                            className="form-check-input iscorrect"
                            type="checkbox"
                        />
                        <div className="form-floating answer-name">
                            <input type="text" className="form-control" placeholder="name@example.com" />
                            <label>Answer 1</label>
                        </div>
                        <div className='btn-group'>
                            <span>
                                <AiOutlinePlusCircle className='icon-add' />
                            </span>
                            <span>
                                <AiOutlineMinusCircle className='icon-remove' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions;