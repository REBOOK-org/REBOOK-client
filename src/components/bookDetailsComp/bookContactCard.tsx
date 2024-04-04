export default function ContactCard({
  email,
  phone,
  address,
  additionalNotes,
}: {
  email: string
  phone: string
  address: string
  additionalNotes: string
}) {
  return (
    <div
      id="contact"
      className="flex flex-col bg-gray-100 m-auto rounded-2xl px-10 py-10 mt-4"
    >
      <h1 className="text-2xl font-bold sticky left-0 my-3">Contact</h1>
      <div className="grid gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">Email:</h1>
          <p className="text-lg">{email}</p>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">Phone:</h1>
          <p className="text-lg">{phone}</p>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">Address:</h1>
          <p className="text-lg">{address}</p>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">Additional Notes:</h1>
          <p className="text-lg">{additionalNotes}</p>
        </div>
      </div>
    </div>
  )
}
