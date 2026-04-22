'use client';

import { Button } from "@nextui-org/button";
import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Radio, RadioGroup, Spinner, useDisclosure } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface RegistrationFormProps {
    handleSubmission: (data: any) => Promise<any>;
}

export default function RegistrationForm({ handleSubmission }: RegistrationFormProps) {
    const router = useRouter();
    const [searchParams] = useSearchParams();
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { isOpen: isErrorOpen, onOpen: onErrorOpen, onOpenChange: onErrorOpenChange, onClose: onErrorClose } = useDisclosure();
    const { isOpen: isConfirmOpen, onOpen: onConfirmOpen, onOpenChange: onConfirmOpenChange, onClose: onConfirmClose } = useDisclosure();

    const [fee, setFee] = useState(searchParams ? 300 : 0);
    const [isTeamSelected, setIsTeamSelected] = useState(false);
    const [isTeamSelectedPrev, setIsTeamSelectedPrev] = useState(false);

    const [type, setType] = useState("individual");
    const [teamName, setTeamName] = useState("");
    const [member1, setMember1] = useState("");
    const [member2, setMember2] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [department, setDepartment] = useState("");
    const [university, setUniversity] = useState("");
    const [criteria, setCriteria] = useState<string[]>([]);

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleCheckboxChange = (value: string[] | FormEvent<HTMLDivElement>): void => {
        let fee = 0;
        let i = 0;

        if (Array.isArray(value)) {
            value = value.filter((item) => item !== undefined && item !== null);
            if (value.includes('workshop')) {
                fee += 200;
                value.splice(value.indexOf('workshop'), 1);
            }
        }

        let items = Array.isArray(value) ? value.length : 0;

        while (items) {
            if (!i) {
                fee += 300;
            } else if (i === 1) {
                fee += 200;
            } else {
                fee += 100;
            }

            items--;
            i++;
        }
        setFee(fee);
    }

    const handleRadioboxChange = (value: string | FormEvent<HTMLDivElement>): void => {
        if (typeof value === "string") {
            if (value.includes("team")) {
                setIsTeamSelected(true);
            } else {
                setIsTeamSelected(false);
            }
        }
        router.refresh();
        console.log(isTeamSelected);
    }

    const handleTypeChange = (value: string): void => {
        setType(value);
    };

    const handleTeamNameChange = (value: string): void => {
        setTeamName(value);
    };

    const handleMember1Change = (value: string): void => {
        setMember1(value);
    };

    const handleMember2Change = (value: string): void => {
        setMember2(value);
    };

    const handleEmailChange = (value: string): void => {
        setEmail(value);
    };

    const handlePhoneNumberChange = (value: string): void => {
        setPhoneNumber(value);
    };

    const handleDepartmentChange = (value: string): void => {
        setDepartment(value);
    };

    const handleUniversityChange = (value: string): void => {
        setUniversity(value);
    };

    const handleCriteriaChange = (value: string[]): void => {
        setCriteria(value);
    };

    const handleSubmit = (): void => {
        const filteredCriteria = criteria.filter((item) => item !== undefined && item !== null);

        // Check if all the required fields are filled
        if (!isTeamSelected && (!member1 || !email || !phoneNumber || !department || !university || filteredCriteria.length === 0)) {
            setIsLoading(false);
            onOpen();
            return;
        }

        if (isTeamSelected && (!teamName || !member1 || !member2 || !email || !phoneNumber || !department || !university || filteredCriteria.length === 0)) {
            setIsLoading(false);
            onOpen();
            return;
        }

        onConfirmOpen();
    }

    const onConfirm = () => {
        const filteredCriteria = criteria.filter((item) => item !== undefined && item !== null);

        setIsLoading(true);
        onOpen();
        const response = handleSubmission({ isTeamSelected, teamName, member1, member2, email, phoneNumber, department, university, criteria: filteredCriteria, fee: fee });

        response.then((res) => {
            if (res.status === 500) {
                setIsLoading(false)
                onClose();
                onErrorOpen();
            }
            router.push(res.url);
            console.log(res);
        });
    }

    return (
        <>
            <form className="mt-5 flex flex-col gap-5" onSubmit={handleSubmit}>
                <RadioGroup
                    isRequired
                    label="Select Your Type:"
                    classNames={{
                        label: "text-left text-bold ",
                    }}
                    onValueChange={(value) => {
                        handleTypeChange(value);
                        handleRadioboxChange(value);
                    }}
                    defaultChecked={true}
                    defaultValue="individual"
                >
                    <Radio value="individual">Individual</Radio>
                    <Radio value="team">Team</Radio>
                </RadioGroup>

                {type === "team" && (
                    <Input
                        isRequired
                        labelPlacement="outside"
                        label="Team Name:"
                        placeholder="Enter your team name"
                        classNames={{
                            label: "text-lg ",
                        }}
                        value={teamName}
                        onChange={(value) => handleTeamNameChange(value.target.value)}
                    />
                )}

                <Input
                    isRequired
                    labelPlacement="outside"
                    label={type === "team" ? "Member 1:" : "Name:"}
                    placeholder={type === "team" ? "Enter member 1 name" : "Enter your name"}
                    classNames={{
                        label: "text-lg ",
                    }}
                    value={member1}
                    onChange={(value) => handleMember1Change(value.target.value)}
                />
                {type === "team" && (
                    <Input
                        isRequired
                        labelPlacement="outside"
                        label="Member 2:"
                        placeholder="Enter member 2 name"
                        classNames={{
                            label: "text-lg ",
                        }}
                        value={member2}
                        onChange={(value) => handleMember2Change(value.target.value)}
                    />
                )}
                <Input
                    isRequired
                    labelPlacement="outside"
                    label="Email:"
                    placeholder="Enter your email"
                    classNames={{
                        label: "text-lg ",
                    }}
                    value={email}
                    onChange={(value) => handleEmailChange(value.target.value)}
                />
                <Input
                    isRequired
                    labelPlacement="outside"
                    label="Phone Number:"
                    placeholder="Enter your phone number"
                    classNames={{
                        label: "text-lg ",
                    }}
                    value={phoneNumber}
                    onChange={(value) => handlePhoneNumberChange(value.target.value)}
                />
                <Input
                    isRequired
                    labelPlacement="outside"
                    label="Department:"
                    placeholder="Enter your department name"
                    classNames={{
                        label: "text-lg ",
                    }}
                    value={department}
                    onChange={(value) => handleDepartmentChange(value.target.value)}
                />
                <Input
                    isRequired
                    labelPlacement="outside"
                    label="University:"
                    placeholder="Enter your university name"
                    classNames={{
                        label: "text-lg ",
                    }}
                    value={university}
                    onChange={(value) => handleUniversityChange(value.target.value)}
                />
                <CheckboxGroup
                    isRequired
                    label="Select Events:"
                    defaultValue={
                        isTeamSelected == isTeamSelectedPrev
                            ? Array<string>(searchParams && searchParams.at(1) as string) : []
                    }
                    classNames={{
                        label: "text-left text-bold ",
                    }}
                    onChange={(value) => {
                        handleCheckboxChange(value);
                        handleCriteriaChange(value as string[]);
                    }}
                >
                    {
                        isTeamSelected ||
                        <>
                            <Checkbox value="cad">CAD Expert</Checkbox>
                            <Checkbox value="mechamind">Mechamind</Checkbox>
                            <Checkbox value="idea">Idea Contest</Checkbox>
                            <Checkbox value="archi">Archi Capture</Checkbox>
                            <Checkbox value="management">Smart Management maestro</Checkbox>
                            <Checkbox value="workshop">Workshop</Checkbox>
                        </>
                    }
                    <Checkbox value="render">Render Rampage</Checkbox>
                    <Checkbox value="poster">Poster Presentation</Checkbox>
                </CheckboxGroup>
                <h2 className="text-lg text-left">Total Fee: {fee} TK</h2>

                <Button
                    onClick={handleSubmit}
                >
                    Next
                </Button>
            </form>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            {isLoading || <ModalHeader className="flex flex-col gap-1">Registration Failed!</ModalHeader>}
                            <ModalBody className={`w-full h-full justify-center ${isLoading ? 'py-10' : ''}`}>
                                {isLoading ? <Spinner size="lg" label="Redirecting to payment page..." /> : "Please fill up all the fields..."}
                            </ModalBody>
                            <ModalFooter>
                                {
                                    isLoading ||
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                }
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Modal isOpen={isErrorOpen} onOpenChange={onErrorOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent>
                    {(onErrorClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Unknown Error!</ModalHeader>
                            <ModalBody className="w-full h-full justify-center">
                                Please try again with different values.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onErrorClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <Modal isOpen={isConfirmOpen} onOpenChange={onConfirmOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent>
                    {(onConfirmClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Do you confirm?</ModalHeader>
                            <ModalBody className="w-full h-full justify-center">
                                Please check all the information before submitting. You will be redirected to the payment page after confirmation.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onConfirmClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onConfirm}>
                                    Confirm
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
