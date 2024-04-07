import { Box, Container, Text, Button, Flex, Avatar, Heading, IconButton, Image, Input } from "@chakra-ui/react";
import { Select } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { Stack, HStack, VStack, StackDivider } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import * as echarts from "echarts";
import { useEffect, useRef, useState } from "react";

export function Home(props) {
    const chartRef = useRef(null);
    const [seriseTime, setSeriesTime] = useState([]);
    function pad2(n) { return n < 10 ? '0' + n : n }

    useEffect(() => {
        setSeriesTime([])
        let date = new Date();
        let dataList = [];
        for(let i = 0; i< 7; i++){
            dataList.push(pad2( date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2( date.getDate() + i)));
        }
        setSeriesTime(dataList);
    }, [])

    useEffect(() => {
        let chartInstance = echarts.init(chartRef.current);
        const option = {
            legend: {
                data: [
                    "value",
                ],
            },
            xAxis: {
                type: "category",
                data: seriseTime,
            },
            yAxis: [
                { type: "value" },
                {
                    type: "value",
                    name: "$",
                    nameTextStyle: {
                        color: "#ccc",
                        padding: [0, 0, 10, -30],
                    },
                    splitNumber: 5,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: "dashed",
                            width: 1,
                            color: ["#ccc", "#ccc"],
                        },
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize: 12,
                        },
                    },
                },
            ],
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
                textStyle: {
                    color: "#fff",
                    align: "left",
                    fontSize: 14,
                },
                backgroundColor: "rgba(0,0,0,0.8)",
            },
            series: [
                {
                    name: "value",
                    data: [50, 130, 124, 18, 35, 47, 160],
                    yAxisIndex: 1,
                    type: "line",
                    smooth: true,
                },
            ],
        };
        chartInstance.setOption(option);
    }, [seriseTime]);

    return (
        <SimpleGrid columns={2} spacing={10}>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={7}
                align='stretch'
            >
                <Box >
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th isNumeric>Net value</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td isNumeric>$25.4</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box>
                    <div ref={chartRef} style={{ height: "400px" }}></div>
                </Box>
            </VStack>

            <Box>
                <VStack
                    divider={<StackDivider borderColor='gray.200' />}
                    spacing={7}
                    align='stretch'
                >
                    <Box w='200px' h='40px'>
                        <Text>Use Market</Text>
                        <Select placeholder='Select market' value={'option1'}>
                            <option value='option1'>SUPPLY</option>
                            <option value='option2'>WITHDRAW</option>
                        </Select>
                    </Box>
                    <Box w='80%'>
                        <Card>
                            <CardHeader>
                                <Heading size='md'> Your supply ${65989.0367}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Box alignContent={'center'}>
                                    <Text>USDT</Text>
                                    <Input></Input>
                                </Box>
                            </CardBody>
                            <CardFooter>
                                <Button>Deposit</Button>
                            </CardFooter>
                        </Card>
                    </Box>
                </VStack>

            </Box>
            <Box ></Box>
            <Box ></Box>
            <Box ></Box>
        </SimpleGrid>
    )
}