import { SettingsTabs } from "./components/SettingsTabs";
import { InputControl, InputPrefix, InputRoot } from "./components/Input";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from "./components/Form/FileInput";
import { Select } from "./components/Form/Select";
import { SelectItem } from "./components/Form/Select/SelectItem";
import { Textarea } from "./components/Form/Textarea";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
              form="settings-form"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings-form"
          action=""
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200"
        >
          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue={"Lucas"} />
              </InputRoot>
              <InputRoot>
                <InputControl defaultValue={"Migueis"} />
              </InputRoot>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email adress
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue={"lucasmigueis1311@gmail.com"}
              />
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <InputRoot>
              <InputControl id="role" defaultValue={"CTO"} />
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="pt" text="Portugal" />
              <SelectItem value="br" text="Brazil" />
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="pt" text="Pacific Standard Time (UTC-08:00)" />
              <SelectItem value="br" text="Pacific Standard Time (UTC-08:00)" />
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap1-">
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <Bold className="w-4 h-4 text-zinc-500 " strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <Italic
                      className="w-4 h-4 text-zinc-500 "
                      strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <Link className="w-4 h-4 text-zinc-500 " strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <List className="w-4 h-4 text-zinc-500 " strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-50 rounded-md"
                  >
                    <ListOrdered
                      className="w-4 h-4 text-zinc-500 "
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
              />
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Share a few snippets of your work.
              </span>
            </label>
            <div>
              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.FileList />
                <FileInput.Control multiple />
              </FileInput.Root>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
