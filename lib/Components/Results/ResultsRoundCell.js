Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='Source/Components/Results/ResultsRoundCell.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _ResultsRoundDetailsView=require('./ResultsRoundDetailsView');var _ResultsRoundDetailsView2=_interopRequireDefault(_ResultsRoundDetailsView);var _ResultsRoundScoreView=require('./ResultsRoundScoreView');var _ResultsRoundScoreView2=_interopRequireDefault(_ResultsRoundScoreView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ResultsRoundCell=function(_React$Component){_inherits(ResultsRoundCell,_React$Component);function ResultsRoundCell(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ResultsRoundCell);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ResultsRoundCell.__proto__||Object.getPrototypeOf(ResultsRoundCell)).call.apply(_ref,[this].concat(args))),_this),_this.didTapItem=function(){_this.props.didSelectRowCallback(_this.props.roundId);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ResultsRoundCell,[{key:'renderExpandedDetails',value:function renderExpandedDetails(){if(this.props.isSelected){return _react2.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:22}},'This is the expanded details section\\nIt has alot of stuff');}}},{key:'render',value:function render(){return _react2.default.createElement(_reactNative.TouchableOpacity,{style:styles.cellStyle,onPress:this.didTapItem,__source:{fileName:_jsxFileName,lineNumber:28}},_react2.default.createElement(_reactNative.View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:32}},_react2.default.createElement(_ResultsRoundDetailsView2.default,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:33}})),_react2.default.createElement(_ResultsRoundScoreView2.default,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:34}}))),this.renderExpandedDetails());}}]);return ResultsRoundCell;}(_react2.default.Component);var styles={cellStyle:{flexDirection:'column',paddingTop:15,paddingBottom:15,paddingLeft:15,paddingRight:15,shadowColor:'#000000',shadowOffset:{width:0,height:2},shadowOpacity:0.2}};exports.default=ResultsRoundCell;