import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">
                    About
                </p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, assumenda perspiciatis! Incidunt provident ipsam placeat labore rem, repellendus quas, blanditiis pariatur at nisi harum fuga quisquam voluptatum hic obcaecati animi itaque! Mollitia facere reiciendis blanditiis omnis itaque pariatur ipsa iste facilis saepe. Veritatis repellendus eius deserunt ullam atque odit sapiente?
            </p>

            <br />

            <p className="text-xl ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam molestiae architecto, iste itaque, dolorum at vitae labore esse non voluptate illo numquam sint ut corrupti corporis beatae, sed nostrum doloremque ex aperiam facilis placeat incidunt cumque! Odio quos animi doloremque quisquam reiciendis, cum consequatur debitis corrupti, eos dolor possimus aspernatur!
            </p>
        </div>
    </div>
  )
}

export default About;