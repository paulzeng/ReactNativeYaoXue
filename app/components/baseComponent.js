/**
 * Created by lipeiwei on 16/11/13.
 */


import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import NavigationBar from '../widget/navigationBar';
import {getNavigator} from '../route';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

class BaseComponent extends Component {

    constructor(props) {
        super(props);
        this.getNavigationBarProps = this.getNavigationBarProps.bind(this);
        this.renderNavigationBar = this.renderNavigationBar.bind(this);
        this.renderBody = this.renderBody.bind(this);
        this.onLeftPressed = this.onLeftPressed.bind(this);
        this.onRightPressed = this.onRightPressed.bind(this);
    }

    /**
     * 子类可重写
     * @returns {null}
     */
    getNavigationBarProps() {
        return null;
    }

    renderNavigationBar() {
        let navigationBarProps = this.getNavigationBarProps();
        Object.assign(navigationBarProps, this.props);
        return (
            <NavigationBar
                navigationBarProps={navigationBarProps}
                onLeftPressed={this.onLeftPressed}
                onRightPressed={this.onRightPressed}
            />
        );
    }

    renderBody() {

    }

    render() {
        let navigationBar = this.renderNavigationBar();
        if (navigationBar) {
            return (
                <View style={[styles.container, this.props.style]}>
                    {navigationBar}
                    {this.renderBody()}
                </View>
            );
        } else {
            return this.renderBody();
        }
    }

    componentWillUnmount() {

    }

    onLeftPressed() {
        getNavigator().pop();
    }

    onRightPressed() {
        console.log('onRightPressed');
    }
}

export default BaseComponent;