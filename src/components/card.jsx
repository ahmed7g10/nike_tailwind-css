
const Card = ({img,r,p,price}) => {
  return (
    <div className="flex flex-col sm:gap-0 gap-2">
      <img width={282} height={282} src={img} alt="" />
      <small className="flex items-center text-lg text-mygray mt-4"><span className="inline-block 
      font-bold text-primary text-2xl">*</span>{r}</small>
      <p className="text-lg">{p}</p>
      <h3 className="text-primary font-bold text-xl">{price}</h3>
    </div>
  )
}

export default Card;
