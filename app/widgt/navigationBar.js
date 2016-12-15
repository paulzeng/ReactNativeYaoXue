/**
 * Created by lipeiwei on 16/11/13.
 */

import React, {Component} from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    Text,
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';
import commonStyle from '../style/commonStyle';

const defaultNavigationHeight = 50;
const defaultImageHeight = defaultNavigationHeight - 30;//左侧图片的高度
const defaultImageWidth = defaultNavigationHeight - 25;//左侧图片的宽度
const IOS_STATUS_BAR_HEIGHT = 15;

const styles = StyleSheet.create({
    navigationBar: {
        backgroundColor: commonStyle.MAIN_COLOR,
        height: defaultNavigationHeight,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    navigationBarTitleContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 80,
        right: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationBarTitle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    leftContainer: {
        flexDirection: 'row',
        paddingHorizontal: 4,
        height: defaultNavigationHeight,
        alignItems: 'center',
    },
    leftButtonTextStyle: {
        color: 'white'
    },
    rightContainer: {
        paddingHorizontal: 8,
        height: defaultNavigationHeight,
        // backgroundColor: 'red',//test
        justifyContent: 'center',//主轴
        alignItems: 'flex-start'//
    },
    rightButtonTextStyle: {
        color: 'white',
        textAlign: 'right',
        fontSize: 16,
        marginRight: 10,
    },
    image: {
        height: defaultImageHeight,
        width: defaultImageWidth,
    },
    statusBar: {
        height: IOS_STATUS_BAR_HEIGHT,
        backgroundColor: commonStyle.MAIN_COLOR
    }
});

const defaultNavigationBarProps = {
    hideNav: false,
    hideLeftButton: false,
    hideRightButton: false,
    // title: 'F2B',
    leftText: '返回',//默认文本
    leftButtonImage: require('../images/return.png')//默认图片 后退
    // rightButtonImage:
    // rightTitle: '点击'
};

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.navigationBarProps = Object.assign({}, defaultNavigationBarProps, props.navigationBarProps);
        this.renderLeftButton = this.renderLeftButton.bind(this);
        this.renderRightButton = this.renderRightButton.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.navigationBarProps = Object.assign({}, defaultNavigationBarProps, nextProps.navigationBarProps);
    }

    renderLeftButton() {
        if (this.navigationBarProps.hideLeftButton) {
            return null;
        }
        var {onLeftPressed} = this.props;
        const {leftText} = this.navigationBarProps;
        return (
            <TouchableOpacity onPress={onLeftPressed} style={[styles.leftContainer, this.navigationBarProps.leftContainer]}>
                <Image style={styles.image} resizeMode="contain" source={this.navigationBarProps.leftButtonImage}/>
                {
                    leftText ? <Text style={styles.leftButtonTextStyle}>返回</Text> : null
                }
            </TouchableOpacity>
        );
    }

    renderRightButton() {
        if (this.navigationBarProps.hideRightButton) {
            return null;
        }
        //优先image, text次之
        var {onRightPressed} = this.props;
        var component;
        if (this.navigationBarProps.rightButtonImage) {
            component = (
                <Image style={styles.image} resizeMode="contain" source={this.navigationBarProps.rightButtonImage}/>
            );
        }
        else if (this.navigationBarProps.rightTitle && this.navigationBarProps.rightTitle !== '') {
            component = (
                <Text
                    style={[styles.rightButtonTextStyle, this.navigationBarProps.rightButtonTextStyle]}>{this.navigationBarProps.rightTitle}</Text>
            );
        } else {
            return null;
        }

        return (
            <TouchableOpacity onPress={onRightPressed}
                              style={[styles.rightContainer, this.navigationBarProps.rightContainer]}>
                {component}
            </TouchableOpacity>
        );
    }

    render() {
        var {hideNav, title} = this.navigationBarProps;
        if (hideNav) {
            return null;
        }
        return (
            <View>
                {Platform.OS === 'ios' ? <View style={styles.statusBar}></View> : null}
                <View style={[styles.navigationBar, this.navigationBarProps.navigationBar]}>
                    {this.renderLeftButton()}
                    {this.renderRightButton()}
                    <View style={styles.navigationBarTitleContainer}>
                        <Text numberOfLines={1}
                              style={[styles.navigationBarTitle, this.navigationBarProps.navigationBarTitle]}>{title}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default NavigationBar;
