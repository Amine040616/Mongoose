const mongoose=require('mongoose')

require('dotenv').config({path:'.env'});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database connected !!!");
  })
  .catch((err) => {
    console.error("Database not connected  !!!");
  });


let personSchema = new mongoose.Schema({
  name:{type:String,required:true},
  age:{type:Number},
  favoriteFoods:[]
});

let personModel=mongoose.model('Person',personSchema); 

//Create and Save a Record of a Model:
let person=personModel({
  name:"Abdejlil",
  age:13,
  favoriteFoods:["Mlou5ya","Kammounya","Rouz Jerbi","kosksi"]
});
person.save((err,data) => {
  if(err) console.log(err)
  console.log('data', data)
})

//Create Many Records 
personModel.create([
  {name:"Mondher",age:14,favoriteFoods:["Mussaca","Lasagne","Dro3"]},
  {name:"Khaled",age:27,favoriteFoods:["Hargma","Dro3","Chappati"]},
  {name:"Lotfi",age:35,favoriteFoods:["Sushi","Pizza"]}
])
.then(el=>console.log('Data', el))
.catch(err=> console.log(err))

/*
//Getting All
personModel.find({name:'Ali'})
.then(el => {
  console.log(el)
})
.catch(err => {
  console.error(err)
})

//Getting one
personModel.findOne({favoriteFoods:{$in:['Pizza']}})
.then(el=>console.log(el))
.catch(err=>console.log(err))

//Getting one By _id
personModel.findById({_id: '600591291de53e32a84fbb51'})
.then(el=>console.log(el))
.catch(err=>console.log(err))

//Classic Updates  "Running Find, Edit, then Save"
personModel.findById({_id: '600591291de53e32a84fbb51'}, (err, person) => {
  if (err) console.log(err)
  else console.log(person.favouriteFoods.push('Loubya'))
  person.save()
  .then(el=>console.log(el))
  .catch(err=>console.log(err))
})

//Perform New Updates on a Document Using model.findOneAndUpdate()
personModel.findByIdAndUpdate({name:'Mondher'}, {age:200}, {new:true})
.then(el=>console.log(el))
.catch(err=>console.log(err))

//Delete One Document Using model.findByIdAndRemove
personModel.findOneAndRemove({_id: '600591291de53e32a84fbb51'})
.then(el=>console.log(el))
.catch(err=>console.log(err))

//Delete Many Documents with model.remove()
personModel.remove({name:'Abdejlil'})
.then(el=>console.log(el))
.catch(err=>console.log(err))

//Chain Search Query Helpers to Narrow Search Results
personModel.find({favouriteFoods:{$in: ['Lasagne']}})
.sort({name:1})
.limit(2)
.select({age:false})
.exec((err,data) => {
  if (err) console.log(err)
  else console.log(data)
})*/