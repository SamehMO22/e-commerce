
import chalk from 'chalk'
import morgan from 'morgan'
import connectDB from '../../DB/connection.js'
import * as Routers from '../index.router.js'
import { globalResponse } from './errorHandling.js'

const initApp = (app, express) => {
    const port = process.env.PORT || 5000

    //convert Buffer Data
    app.use(express.json({}))
    if (process.env.ENV_MODE == 'DEV') {
        app.use(morgan('dev'))
    } else {
        app.use(morgan('combined'))
    }
    //connect to DB
    connectDB()
    //Setup API Routing 
    app.use(`/auth`, Routers.authRouter)
    app.use(`/user`, Routers.userRouter)
    app.use(`/product`, Routers.productRouter)
    app.use(`/category`, Routers.categoryRouter)
    app.use(`/subCategory`, Routers.subcategoryRouter)
    app.use(`/reviews`, Routers.reviewsRouter)
    app.use(`/coupon`, Routers.couponRouter)
    app.use(`/cart`, Routers.cartRouter)
    app.use(`/order`, Routers.orderRouter)
    app.use(`/brand`, Routers.branRouter)
    // in-valid routings
    app.all('*', (req, res, next) => {
        res.json("In-valid Routing Plz check url  or  method")
    })
    // fail reposne
    app.use(globalResponse)

    app.listen(port, () => console.log(chalk.blue.bgWhite.bold(`Example app listening on port ${port}!`)))

}
// NER //


export default initApp