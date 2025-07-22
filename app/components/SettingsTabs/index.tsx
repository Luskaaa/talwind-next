"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./TabItem";
import { useState } from "react";

import * as ScrollArea from "@radix-ui/react-scroll-area";

export function SettingsTabs() {
  const [currectTab, setCurrentTab] = useState("my-details");
  return (
    <Tabs.Root value={currectTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            <TabItem
              value={"my-details"}
              title={"My details"}
              isSelected={currectTab === "my-details"}
            />
            <TabItem
              value={"profile"}
              title={"Profile"}
              isSelected={currectTab === "profile"}
            />
            <TabItem
              value={"password"}
              title={"Password"}
              isSelected={currectTab === "password"}
            />
            <TabItem
              value={"team"}
              title={"Team"}
              isSelected={currectTab === "team"}
            />
            <TabItem
              value={"plan"}
              title={"Plan"}
              isSelected={currectTab === "plan"}
            />
            <TabItem
              value={"billing"}
              title={"Billing"}
              isSelected={currectTab === "billing"}
            />
            <TabItem
              value={"email"}
              title={"Email"}
              isSelected={currectTab === "email"}
            />
            <TabItem
              value={"notifications"}
              title={"Notifications"}
              isSelected={currectTab === "notifications"}
            />
            <TabItem
              value={"integrations"}
              title={"Integrations"}
              isSelected={currectTab === "integrations"}
            />
            <TabItem
              value={"api"}
              title={"API"}
              isSelected={currectTab === "api"}
            />
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none flex-col bg-zinc-100 select-none"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  );
}
