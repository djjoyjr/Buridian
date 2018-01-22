import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
// import Categories from '../categories.json'

export default class Checkbox extends PureComponent {
  state = {
    checked: false,
    label: '',
    categories: [],
    arrIndex: ''
  };


    componentDidMount() {
        this.setState({ checked: this.state.checked })
        // console.log("value of this.state.checked in cDM: " + this.state.checked);

    }

    componentDidUpdate(prevProps, prevState) {
        this.setState({ checked: this.state.checked })
<<<<<<< HEAD
        console.log("State after cDU: " +this.state.checked);
        console.log("this.state after cDU:  " + this.state.label);
=======
        // console.log("State after cDU: " +this.state.checked + 'and' + this.state.label);
        this.props.addCategory(this.state.categories)
        
        console.log('24 checkbox', this.state.categories)
>>>>>>> 9ae7a277093a16442f126a73c3bc8b0d3273b9ce

    }

    render() {
        const { checked } = this.state
        // console.log("value of checked in render: " + checked);
        const {
            labelBefore,
            containerStyle,
            checkedComponent,
            uncheckedComponent,
            checkedImage,
            uncheckedImage,
            checkboxStyle,
            labelStyle,
            numberOfLabelLines,
            label
        } = this.props

        return (
            <TouchableOpacity
                style={[styles.container, containerStyle]}
                onPress={this.handleToggleChecked}
            >
                {labelBefore ? (
                    <Label
                        labelStyle={labelStyle}
                        numberOfLabelLines={numberOfLabelLines}
                        label={label}
                    />
                ) : null}

                {checkedComponent && uncheckedComponent ? checked ? (
                    checkedComponent
                ) : (
                    uncheckedComponent
                ) : (
                    <Image
                        style={[styles.checkbox, checkboxStyle]}
                        source={checked ? checkedImage : uncheckedImage}
                    />
                )}

                {!labelBefore && (
                    <Label
                        labelStyle={labelStyle}
                        numberOfLabelLines={numberOfLabelLines}
                        label={label}
                    />
                )}
            </TouchableOpacity>
        )
    }

    handleToggleChecked = () => {   

      const { label } = this.props

      const checked = this.state.checked;
    //   const categoriesMap = this.props.categoryArr.map(categories=>{
    //     return categories.label
    //   })
      console.log(label + "'s state when clicked was: " + checked + 'and' + this.state.label);
      console.log(this.state.categories, 'CheckBox89 before check');
      const categoryArr = this.props.categoryArr

      if (checked===false) {
        this.setState({ checked : true});
        this.setState({label})

        const categoryObj = categoryArr.forEach((category, i) => {
            if(category.label === label){
                const catArr = this.state.categories
                const categories = catArr.concat(categoryArr[i]);
                this.setState({categories})
                // this.props.addCategory(this.state.categories)
                
            }
        });
        
        // alert(this.state.arrIndex, '99 cb');
        return this.state
        // console.log(label +" this.state.checked2: " + this.state.checked);

      }

      else if (checked===true) {
        let categories = this.state.categories;
        let i = categories.length - 1;
        categories.splice(i, 1);
        
        this.setState({categories});
        this.setState({ checked: false});
        this.setState({label: ''})
        // this.props.addCategory(this.state.categories)
        
        return this.state
        // console.log(label + " this.state.checked3: " + this.state.checked);

      }

        // console.log("this.props: ", this.props.label, this.props);
        // const { label } = this.props
        // let isChecked = !this.state.checked
        // console.log(label + " isChecked before setState: " + isChecked);
        // console.log(label + " this.state.checked before setState: " + this.state.checked);
        // console.log(label + " this.props.checked before setState: " + this.props.checked);
        // this.setState({ isChecked })
        // this.props.onChange && this.props.onChange({ label, isChecked })
        // console.log(label + " isChecked after setState: " + isChecked);
        // console.log(label + " this.state.checked after setState: " + this.state.checked);
        // console.log(label + " this.props.checked after setState: " + this.props.checked);
        // this.props.addCategory(this.state.categories)
    }
}

const Label = ({ labelStyle, numberOfLabelLines, label }) => (
    <View style={styles.labelContainer}>
        <Text style={[styles.label, labelStyle]} numberOfLines={numberOfLabelLines}>
            {label}
        </Text>
    </View>
)

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        width: 30,
        height: 30
    },
    labelContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    label: {
        fontSize: 16,
        color: '#222'
    }
})

Checkbox.defaultProps = {
    custom: false,
    label: 'Label',
    numberOfLabelLines: 1,
    labelBefore: false,
    checked: false,
    checkedImage: require('./checked.png'),
    uncheckedImage: require('./unchecked.png'),
    checkedComponent: null,
    uncheckedComponent: null
}

Checkbox.propTypes = {
    checkedComponent: PropTypes.element,
    uncheckedComponent: PropTypes.element,
    checked: PropTypes.bool,
    checkboxStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    label: PropTypes.string,
    labelBefore: PropTypes.bool,
    labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    numberOfLabelLines: PropTypes.number,
    onChange: PropTypes.func
}