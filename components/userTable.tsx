import { Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import CsvDownloadButton from 'react-json-to-csv';

export default function UserDataTable({ password }: { password: string }) {
    const [realTimeData, setRealTimeData] = useState<string[] | null>(null);

    const getCriteria = (item: string) => {
        const ciretiaMap = [
            {
                "key": "cad",
                "value": "CAD Expert"
            },
            {
                "key": "render",
                "value": "Render Rampage",
            },
            {
                "key": "mechamind",
                "value": "Mechamind",
            },
            {
                "key": "idea",
                "value": "Idea Contest",
            },
            {
                "key": "poster",
                "value": "Poster Presentation",
            },
            {
                "key": "archi",
                "value": "Archi Capture",
            },
            {
                "key": "management",
                "value": "Smart Management maestro",
            },
            {
                "key": "workshop",
                "value": "Workshop",
            }
        ];

        console.log("Item: ", item);
        console.log("CriteriaMap: ", ciretiaMap.filter((criteria) => criteria.key === item));

        if (ciretiaMap.filter((criteria) => criteria.key === item).length === 0) {
            return "Undefined";
        }

        return ciretiaMap.filter((criteria) => criteria.key === item)[0].value;
    }

    const returnCritera = (criteria: any) => {
        let criteriaString = "";
        const criteriaArray = criteria.at(0).split(",");
        criteriaArray.forEach((item: any) => {
            if (criteriaString !== "") {
                criteriaString += ", ";
            }

            item = item.replace(/\s/g, '');
            item = item.replace(/['"]+/g, '');

            criteriaString += getCriteria(item);
        });
        return criteriaString;
    }

    axios.post('/api/fetchRegData', { password, table: 'registration' })
        .then((response) => {
            setRealTimeData(response.data.data);
        })
        .catch((error) => {
            console.log("error: ", error);
        });


    if (!realTimeData) {
        return (
            <div className='flex gap-2 m-5'>
                <Spinner size='md' />
                <span className='text-2xl'>Loading...</span>
            </div>
        )
    }
    if (realTimeData) {

        const teamRegistrationData = realTimeData.filter((item: any) => item.isteam);
        const individualRegistrationData = realTimeData.filter((item: any) => !item.isteam);

        return (
            <div className=''>
                <>
                    <h1 className='text-center text-2xl font-bold my-3'>Individual Registration Data</h1>
                    <CsvDownloadButton
                        className='align-right'
                        data={individualRegistrationData}
                        delimiter=';'
                    >
                        Download CSV
                    </CsvDownloadButton>

                    <Table className='pb-10' classNames={{
                        tr: 'border-b',
                        td: 'border-x',
                    }}>
                        <TableHeader>
                            <TableColumn>ID</TableColumn>
                            <TableColumn>Member Name</TableColumn>
                            <TableColumn>Email</TableColumn>
                            <TableColumn>Phone Number</TableColumn>
                            <TableColumn>Department</TableColumn>
                            <TableColumn>University</TableColumn>
                            <TableColumn>Events</TableColumn>
                            <TableColumn>Fee</TableColumn>
                            <TableColumn>Payment Status</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {individualRegistrationData.map((item: any) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.member_1}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.phonenumber}</TableCell>
                                    <TableCell>{item.department}</TableCell>
                                    <TableCell>{item.university}</TableCell>
                                    <TableCell>{returnCritera(item.criteria)}</TableCell>
                                    <TableCell>{item.fee}</TableCell>
                                    <TableCell>{item.ispaid ? "Paid" : "Unpaid"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <h1 className='text-center text-2xl font-bold my-3'>Team Registration Data</h1>
                    <CsvDownloadButton
                        className='align-right'
                        data={teamRegistrationData}
                        delimiter=';'
                    >
                        Download CSV
                    </CsvDownloadButton>
                    <Table className='pb-10' classNames={{
                        tr: 'border-b',
                        td: 'border-x',
                    }}>
                        <TableHeader>
                            <TableColumn>ID</TableColumn>
                            <TableColumn>Team Name</TableColumn>
                            <TableColumn>Member 1</TableColumn>
                            <TableColumn>Member 2</TableColumn>
                            <TableColumn>Email</TableColumn>
                            <TableColumn>Phone Number</TableColumn>
                            <TableColumn>Department</TableColumn>
                            <TableColumn>University</TableColumn>
                            <TableColumn>Events</TableColumn>
                            <TableColumn>Fee</TableColumn>
                            <TableColumn>Payment Status</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {teamRegistrationData.map((item: any) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.teamname}</TableCell>
                                    <TableCell>{item.member_1}</TableCell>
                                    <TableCell>{item.member_2}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.phonenumber}</TableCell>
                                    <TableCell>{item.department}</TableCell>
                                    <TableCell>{item.university}</TableCell>
                                    <TableCell>{returnCritera(item.criteria)}</TableCell>
                                    <TableCell>{item.fee}</TableCell>
                                    <TableCell>{item.ispaid ? "Paid" : "Unpaid"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </>
            </div>
        )
    }

    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>No data available</h1>
        </div>
    )
}
