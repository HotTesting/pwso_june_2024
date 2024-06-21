import { shopTest } from "."

export const globalBeforeEach = () => {
    shopTest.beforeEach(()=> {
        console.log('global before each')
    })
}