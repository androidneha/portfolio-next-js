import {GetServerSideProps, GetStaticProps} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../type";
import about from "./about";

const index = () => {
    return (
        <div className='flex flex-col px-6 pt-1 flex-grow dark:bg-dark-300 dark:bg-black-500 dark:text-white'>
            <h5 className='my-3 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
            <div className='flex-grow p-4 mt-5 bg-gray-300 dark:bg-dark-100' style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
                <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
                <div className='grid gap-6 lg:grid-cols-2'>
                    {services.map(service => (
                       <div key={service.title} className='lg:col-span-1 bg-gray-200 dark:bg-dark-300 dark:bg-black-500 rounded-lg lg:col-span-1'>
                           <ServiceCard service={service} />
                       </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
// export const getStaticProps = async (context:GetStaticProps) => {
//
//     const res = await fetch('http://localhost:3000/api/services')
//     const data = await res.json()
//
//     return {
//         props: {
//             services: data.services,
//         }
//     }
// }

// export const getServerSideProps = async (context:GetServerSideProps) => {
//
//     const res = await fetch('http://localhost:3000/api/services')
//     const data = await res.json()
//
//     return {
//         props: {
//             services: data.services,
//         }
//     }
// }

export default index
