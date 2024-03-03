import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const MyCard = ({img,people,day}) => {
    return (
        <Card className="w-96 py-3 m-1 relative flex items-center bg-black hover:scale-105 hover:bg-[#411b7e] duration-300">
            <CardHeader floated={false} className="w-full rounded-none opacity-50 mt-0 mx-0">
                <img src={img} alt="profile-picture" className=" sm:h-44 w-full"/>
            </CardHeader>
            <CardBody className="absolute bottom-0 left-0 text-white">
                <Typography variant="h5" className="font-medium">
                    {people}
                </Typography>
                <Typography variant="h5" className="font-medium">
                    {day}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default MyCard