
# toDate, fromDate => joi validation,
    fromDate: Joi.date().greater(Date.now()),
# order model 
# create order
  =>if coupon applied , validate it
  => check products array ( products exists with available quantity)
  => prepare the object if that send to the order model to be added in DB
  => decrease products' stock by order quantity
  => remove this products from the cart if exits
  => increase the usage count of coupon by 1 if coupon used
  => if cart created for this user , so we will choose products from it not add them manual
  => make an option to select an item or product from the cart products 
# cancel order

