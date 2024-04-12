"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export interface Smoker {
    name: string;
    text: string;
    age: number;
    image: string;
}

export default function TestimonialCard({ image, name, text, age }: Smoker) {
    return (
        <Card className="flex flex-col justify-center items-center text-center">
            <CardHeader className="flex justify-center items-center gap-2">
                <Avatar className="bg-muted w-32 h-32 border">
                    <AvatarImage className="object-contain" src={image} />
                </Avatar>
                <CardDescription>
                    <strong className="text-lg">"{text}"</strong>
                    <br /><br />
                    <span className="text-md">
                        - {name}, {age} anos
                    </span>

                </CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
        </Card>
    );
}
