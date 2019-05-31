import React,{Component} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }
    handleChange = () => {
        this.setState({
            checked: !this.state.checked
        },()=>this.props.handleCheckboxToggle(this.props.label, this.state.checked));
        
    }
    render() {
        const {label} = this.props;
        return (
            <div>
                <form>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                    <label>{label}</label>

                </form>
            </div>
        )
    }
}    