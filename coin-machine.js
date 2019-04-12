 /**
 * @api {post} /api/user/addUser  用户添加------------
 *
 * @apiParam {String} wxId  
 * @apiParam {String} wxNickName  
 * @apiParam {String} phone  
 * @apiParam {String} adress  
 * @apiParam {Integer} age  
 * @apiParam {String} sex  1:男，2：女
 * @apiParam {String} deviceType  1:安卓，2：苹果  
 *
 *
 * @apiSuccess  statusCode  状态码：0：成功  非0：失败
 * @apiSuccess  statusMsg
 *
 * @apiSuccessExample Success-Response:
 *{
    "statusCode":0,
    "statusMsg":"成功",
    "result":[
        {
            "success"
        }
    ]
}
 */
 
/**
 * @api {post} /api/device/getDeviceList  设备列表------------
 *
 * @apiParam {String} latitude  
 * @apiParam {String} longitude  
 *
 *
 * @apiSuccess  statusCode  状态码：0：成功  非0：失败
 * @apiSuccess  statusMsg
 *
 * @apiSuccessExample Success-Response:
 *{
    "statusCode":0,
    "statusMsg":"成功",
    "result":[
        {
            "id":3,
            "deviceMac":"34D712A113AD",
            "latitude":"22.576702",
            "longitude":"113.950877",
            "address":"西丽",
            "agentName":"优诺贝思翠",
            "range":100  //距离
        }
    ]
}
 */
 
 
 /**
 * @api {post} /api/device/getGoodsList  设备列表------------
 *
 * @apiParam {String} deviceMac   
 *
 *
 * @apiSuccess  statusCode  状态码：0：成功  非0：失败
 * @apiSuccess  statusMsg
 *
 * @apiSuccessExample Success-Response:
 *{
    "statusCode":0,
    "statusMsg":"成功",
    "result":[
        {
            "id":1,
            "goodsName":"威化饼",
            "length":20,
            "width":20,
            "height":20,
            "goodsPrice":0.01,
            "imgName":null,
            "imgUrl":"dadf/jj.jpg",
            "brief":"123456",   //商品描述
            "weight":130,
            "number":10,
            "deviceMac":"34D712A113AD",
            "schemeType":2,
            "schemeName":"方案2",
            "position":1
        },
        {
            "id":2,
            "goodsName":"苹果",
            "length":20,
            "width":20,
            "height":20,
            "goodsPrice":0.01,
            "imgName":null,
            "imgUrl":"dfdfs/dfdf.jpg",
            "brief":"123456",
            "weight":120,
            "number":20,
            "deviceMac":"34D712A113AD",
            "schemeType":2,
            "schemeName":"方案2",
            "position":2
        }
    ]
}
 */
 
 
 
  /**
 * @api {post} /api/user/userOrder  用户订单------------
 *
 * @apiParam {String} wxId  
 * @apiParam {Integer} orderType   1:支付成功，2：支付中，4:已完成
 *
 *
 * @apiSuccess  statusCode  状态码：0：成功  非0：失败
 * @apiSuccess  statusMsg
 *
 * @apiSuccessExample Success-Response:
 *{
    "statusCode":0,
    "statusMsg":"成功",
    "result":[
        {
            "id":33,
            "deviceMac":null,
            "status":"待取货",
            "price":0.09,
            "createTm":1550911980000,
            "wxUserId":"dfdf",
            "orderId":"machine_order_1550911979547",
            "goodsList":[
                {
                    "id":33,
                    "deviceMac":"34D712A113AD",
                    "goodsId":1,
                    "goodsName":"苹果",
                    "brief":"123456",
                    "imgName":"nihao.jpg",
                    "imgUrl":"dfdfs/dfdf.jpg",
                    "buyNum":3,
                    "schemeType":0,
                    "position":2,
                    "status":1,
                    "price":0.03,
                    "createTm":1550911980000,
                    "payType":1,
                    "wxUserId":"dfdf",
                    "orderId":"machine_order_1550911979547"
                },
                {
                    "id":34,
                    "deviceMac":"34D712A113AD",
                    "goodsId":1,
                    "goodsName":"苹果",
                    "brief":"123456",
                    "imgName":"nihao.jpg",
                    "imgUrl":"dfdfs/dfdf.jpg",
                    "buyNum":3,
                    "schemeType":0,
                    "position":2,
                    "status":1,
                    "price":0.03,
                    "createTm":1550912002000,
                    "payType":1,
                    "wxUserId":"dfdf",
                    "orderId":"machine_order_1550911979547"
                },
                {
                    "id":35,
                    "deviceMac":"34D712A113AD",
                    "goodsId":1,
                    "goodsName":"苹果",
                    "brief":"123456",
                    "imgName":"nihao.jpg",
                    "imgUrl":"dfdfs/dfdf.jpg",
                    "buyNum":3,
                    "schemeType":0,
                    "position":2,
                    "status":1,
                    "price":0.03,
                    "createTm":1550912038000,
                    "payType":1,
                    "wxUserId":"dfdf",
                    "orderId":"machine_order_1550911979547"
                }
            ]
        }
    ]
}
 */
 
  /**
 * @api {post} /api/user/OrderDetail  订单详情------------
 *
 * @apiParam {String} orderId  
 *
 *
 * @apiSuccess  statusCode  状态码：0：成功  非0：失败
 * @apiSuccess  statusMsg
 *
 * @apiSuccessExample Success-Response:
 *{
    "statusCode":0,
    "statusMsg":"成功",
    "result":{
        "id":33,
        "deviceMac":null,
        "status":"待取货",
        "price":0.09,
        "createTm":1550911980000,
        "wxUserId":"dfdf",
        "orderId":"machine_order_1550911979547",
        "pickNum":null,
        "buyNum":null,
        "pickRecords":[
            {
                "pickNum":3,
                "createTm":1552813101000
            }
        ],
        "goodsList":[
            {
                "id":33,
                "deviceMac":"34D712A113AD",
                "goodsId":1,
                "goodsName":"苹果",
                "brief":"123456",
                "imgName":"nihao.jpg",
                "imgUrl":"dfdfs/dfdf.jpg",
                "buyNum":3,
                "schemeType":0,
                "position":2,
                "status":1,
                "price":0.03,
                "createTm":1550911980000,
                "payType":1,
                "wxUserId":"dfdf",
                "orderId":"machine_order_1550911979547"
            }
        ]
    }
}
 */
 
 
  /**
 * @api {post} /api/goods/pai  支付接口------------
 *
 * @apiParam {String} openId  
 * @apiParam {String} orders
  *  {
		"goods_id":8,
		"buy_num":2,
		"scheme_type":1,
		"position":2,
		"amount":12.3 
    } 
 *
 *
 * @apiSuccess  statusCode  状态码：0：成功  非0：失败
 * @apiSuccess  statusMsg
 *
 * @apiSuccessExample Success-Response:
 *{
    "statusCode":0,
    "statusMsg":"成功",
    "result":{
        
    }
}
 */
 
 
 
