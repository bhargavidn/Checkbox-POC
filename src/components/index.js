import React,{Component} from 'react';
import Checkbox from './checkbox';

const checkboxLabels1=[
    "one",
    "two",
    "three"
]

const checkboxLabels2=[
    "four",
    "five",
    "six"
]
let checkedItems = [];

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedItems : []
        }
    }
    handleCheckboxToggle = (label, checkedItem) => {      
        if(checkedItem){
            checkedItems = checkedItems.concat(label);
        } 
        else {
            checkedItems.map((item, index)=> { if(item===label){checkedItems.splice(index,1)}});
        }
        this.setState({
            checkedItems
        })
        
    }
    render() {
        return (
            <div style={{"margin":"20px"}}>
                {checkboxLabels1.concat(checkboxLabels2).map(label => <Checkbox label={label} handleCheckboxToggle={this.handleCheckboxToggle}/>)}
                
                <div>
                    Checked Items are : 
                    <ol>
                        {this.state.checkedItems.map(item=><li>{item}</li>)}
                    </ol>
                </div>
            </div>
        )
    }
}