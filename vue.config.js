/**
 * Created by cld on 2020/2/7.
 */
const antDesign = require('@ant-design/colors')
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `$primary: ${antDesign.generate('#225BF6').reverse()};
                $danger:${antDesign.generate('#F62222').reverse()};
                $warning:${antDesign.generate('#F68C22').reverse()};
                $success:${antDesign.generate('#1EDB4E').reverse()};`
            },
            less: {
                globalVars: {
                    primary: antDesign.generate('#225BF6').reverse(),//colors是antDesign生成的全局数组文件
                    danger: antDesign.generate('#F62222').reverse(),
                    warning: antDesign.generate('#F68C22').reverse(),
                    success: antDesign.generate('#1EDB4E').reverse()
                }
            },
        },

    },
}
