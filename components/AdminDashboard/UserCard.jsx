"use client";

import { User } from "lucide-react"; // Ensure you have the lucide-react package
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"; // Adjust the path as needed

// Sample data
const totalUsers = 1500; // Example total users joined
const percentageIncrease = 12.5; // Example percentage increase from previous month

export function UserCard() {
  return (
    <Card className="relative p-6">
      <div className="absolute top-4 right-4">
        <User className="h-6 w-6 text-gray-500" />
      </div>
      <CardHeader>
        <h2 className="text-lg font-semibold">User Overview</h2>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold">{totalUsers} Users Joined</div>
          <div className="text-sm text-gray-600">
            Percentage Increase: {percentageIncrease.toFixed(2)}%
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
