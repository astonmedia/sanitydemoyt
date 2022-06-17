const Error = ({ errors }) => {
  return (
    <div className="flex flex-col p-5">
      {errors.name && (
        <span className="text-red-500">- The Name field is required</span>
      )}
      {errors.comment && (
        <span className="text-red-500">- The Comment field is required</span>
      )}
      {errors.email && (
        <span className="text-red-500">- The Email field is required</span>
      )}
    </div>
  )
}

export default Error
