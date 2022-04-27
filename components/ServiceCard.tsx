import {FunctionComponent} from "react";
import {Service} from "../type";
import about from "../pages/about";

const ServiceCard:FunctionComponent<{service:Service}> = ({service: {Icon, about, title}}) => {

    const createMarkup = () => {
        return {
            __html: about
        }
    }
    return (
        <div className='p-2 flex item-center space-x-4'>
            <Icon className='w-12 h-12 text-green'/>
            <div>
                <h4 className='font-bold'>{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}></p>
            </div>
        </div>
    )
}

export default ServiceCard