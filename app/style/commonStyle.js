/**
 * Created by lipeiwei on 16/11/13.
 */

import {
    StyleSheet
} from 'react-native';
// import getPlatformElevation from './elevation';

const MAIN_COLOR = '#7294FE';

const styles = StyleSheet.create({
    //全局通用的按钮样式
    buttonContainer: {
        backgroundColor: MAIN_COLOR,
        height: 35,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    },
});

export default {
    ...styles,
    LIGHT_BLUE_BACKGROUND: '#ECF0FA',//新的主背景色
    MAIN_COLOR,//主色调 蓝色
    GRAY_COLOR: '#DADADA',//主色调 灰色
    LINE_GRAY_COLOR: '#66666619',//分割线 10%透明
    TEXT_COLOR: '#262626',//一级字体颜色 黑色
    TEXT_GRAY_COLOR: '#666666',//二级字体颜色 灰色
    PRIMARY_FONT_SIZE: 15,//一级字体
    SECONDARY_FONT_SIZE: 13,//二级字体
    ThIRD_FONT_SIZE: 11,
    HORIZONTAL_SPACE: 16,//两边的水平间距
    BADGE_COLOR: '#F23F4F',//红点颜色
};
