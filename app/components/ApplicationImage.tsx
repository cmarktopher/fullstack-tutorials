import Image from "next/image"

export const ApplicationImage = () => {
  return (
    <section className="w-full mx-auto">
        <Image
            className="border-4 dark:border-slate-500 rounded-lg mx-auto mt-8"
            src="/images/PlaceHolderImage.png"
            width={200}
            height={200}
            alt="Application Image"
            priority={true}
        />
    </section>
  )
}
