"use client";

import FormWrapper from "@/components/shared/FormWrapper";
import VisuallyHiddenInput from "@/components/shared/VisuallyHiddenInput";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { regions } from "@/constants";
import { residentalAccidentSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function Page() {
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");
  const [file4, setFile4] = useState("");

  const form = useForm<z.infer<typeof residentalAccidentSchema>>({
    resolver: zodResolver(residentalAccidentSchema),
    defaultValues: {
      pasportRaqam: "",
      passportSeriya: "",
      jshshir: "",
      FIO: "",
      manzil: "",
      hudud: "",
      sugurtaManzil: "",
      telefonRaqam: "",
      sugurtaPuli: "",
      sugurtaQiymati: "",
      geografikHudud: " Oʻzbekiston Respublikasi",
      sugurtaTarifi: "0.2 %",
      sugurtaMukofoti: "",
      tolovturi: "payme",
    },
  });

  function onSubmit(values: z.infer<typeof residentalAccidentSchema>) {
    if (!file1 && !file2 && !file3 && !file4) return;
    const valuess = { ...values, file1, file2, file3, file4 };
    console.log(valuess);
  }

  return (
    <section className="container mx-auto max-md:px-4">
      <FormWrapper title="Aholi uy-joylarini sug'urta qilish">
        <h2 className="mb-3 font-semibold text-[15px]">
          1. Sugʻurta qildiruvchi (mulkdor)ning pasport ma'lumotlari.
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 px-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <FormField
                control={form.control}
                name="passportSeriya"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Pasport seriya
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="AA"
                        {...field}
                        className="border-[1px] border-[#d2d8dd] text-[#292929] font-medium rounded-[15px] h-[43px] focus:border-[#2A9E43] uppercase"
                        maxLength={2}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pasportRaqam"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Pasport raqam
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="1234567"
                        type="number"
                        {...field}
                        className="border-[1px] border-[#d2d8dd] text-[#292929] font-medium rounded-[15px] h-[43px] focus:border-[#2A9E43] uppercase"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jshshir"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      JShShIR
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="32605988550018"
                        type="number"
                        {...field}
                        className="border-[1px] border-[#d2d8dd] text-[#292929] font-medium rounded-[15px] h-[43px] focus:border-[#2A9E43] uppercase"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div>
                <p className="text-[#292929] font-normal text-[15px] mb-2">
                  Ma'lumotlarni izlash
                </p>
                <Button
                  type="submit"
                  className="bg-[#2A9E43] font-medium outline-none h-[45px] py-[10px] w-full rounded-[15px] hover:bg-[#2A9E43] hover:opacity-75 transition-all duration-300"
                >
                  Aniqlash
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <FormField
                control={form.control}
                name="FIO"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Sug‘urta qildiruvchi F.I.O.
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-[1px] border-[#d2d8dd] text-[#292929] font-medium rounded-[15px] h-[43px] focus:border-[#2A9E43]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="manzil"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Manzili<span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-[1px] border-[#d2d8dd] text-[#292929] font-medium rounded-[15px] h-[43px] focus:border-[#2A9E43]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telefonRaqam"
                render={({ field }) => (
                  <FormItem className="md:max-w-[350px]">
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Telefon raqam
                      <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="998 99 999 99 99"
                        {...field}
                        className="border-[1px] border-[#d2d8dd] text-[#292929] font-bold rounded-[15px] h-[43px] focus:border-[#2A9E43]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="sugurtaManzil"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Sug‘urtalangan uy-joy manzili
                      <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-[1px] border-[#d2d8dd] text-[#292929] font-medium rounded-[15px] h-[43px] focus:border-[#2A9E43]"
                      />
                    </FormControl>
                    <FormDescription>
                      Namuna: Toshkent sh Chilonzor tuman 19-kvartal 16-uy
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hudud"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Hududni tanlang
                    </FormLabel>
                    <FormControl>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="border-[1px] border-[#d2d8dd] rounded-[15px] h-[43px] text-[#292929] focus:border-[#2A9E43] pl-2 outline-none font-medium text-[15px]">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          {regions.map((region) => (
                            <SelectItem key={region.id} value={region.title}>
                              {region.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <h4 className="mb-3 font-semibold text-[15px]">
              6. Sugʻurta ma'lumotlari:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="sugurtaQiymati"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Sugʻurta qiymati (uy-joy bozor qiymati)
                      <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-[1px] border-[#d2d8dd] text-[#292929] font-medium rounded-[15px] h-[43px] focus:border-[#2A9E43]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sugurtaPuli"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Sugʻurta puli (sug‘urtaga olinadigan javobgarlik)
                      <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-[1px] border-[#d2d8dd] text-[#292929] font-medium rounded-[15px] h-[43px] focus:border-[#2A9E43]"
                      />
                    </FormControl>
                    <FormDescription>
                      Sug'urta puli uy-joyning bozor qiymatidan oshmasligi shart
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <FormField
                control={form.control}
                name="sugurtaTarifi"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Sug‘urta tarifi (yillik):
                      <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-[1px] border-[#d2d8dd] bg-[#e9ecef] text-[#292929] font-medium rounded-[15px] h-[43px] focus:border-[#2A9E43]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sugurtaMukofoti"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Sug'urta mukofoti
                      <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-[1px] border-[#d2d8dd] bg-[#e9ecef] text-[#292929] font-medium rounded-[15px] h-[43px] focus:border-[#2A9E43]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="geografikHudud"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Geografik hudud
                      <span className="text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="border-[1px] border-[#d2d8dd] bg-[#e9ecef] text-[#292929] font-medium rounded-[15px] h-[43px] focus:border-[#2A9E43]"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <h4 className="mb-3 font-semibold  text-[15px]">
              7. Uy-joyning rasmi (.*jpg yoki *.pdf ilova qilinadi):
            </h4>
            <div className="grid max-md:grid-cols-1 grid-cols-2 gap-3">
              <VisuallyHiddenInput
                title="Uy-joyning old qismi (tashqi fasad) toʻliq rasmi"
                fileName={file1}
                setFileName={setFile1}
                id={1}
              />
              <VisuallyHiddenInput
                title="Uy-joyning hovli etagi (asosiy binoning roʻparasi) toʻliq rasmi"
                fileName={file2}
                setFileName={setFile2}
                id={2}
              />{" "}
              <VisuallyHiddenInput
                title="Uy-joyning hovli etagidan olingan ichkari fasad toʻliq rasmi"
                fileName={file3}
                setFileName={setFile3}
                id={3}
              />{" "}
              <VisuallyHiddenInput
                title="Sug‘urtalanadigan uy-joyning kadastri"
                fileName={file4}
                setFileName={setFile4}
                id={4}
              />
            </div>

            <h4 className="mb-3 font-semibold  text-[15px]">
              8. To'lov turini tanlang
            </h4>

            <FormField
              control={form.control}
              name="tolovturi"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex items-center gap-2"
                    >
                      <div
                        className={`flex cursor-pointer rounded items-center border-[1px] px-2 py-2 space-x-2 ${
                          field.value === "payme"
                            ? "border-[#2A9E43]"
                            : "border-white"
                        }`}
                      >
                        <RadioGroupItem
                          value="payme"
                          className="hidden"
                          id="payme"
                        />
                        <Label htmlFor="payme" className="cursor-pointer">
                          <Image
                            src={"/payme.png"}
                            alt="payme"
                            width={78}
                            height={24}
                          />
                        </Label>
                      </div>
                      <div
                        className={`flex cursor-pointer rounded items-center border-[1px] px-2 py-2 space-x-2 ${
                          field.value === "uzum"
                            ? "border-[#2A9E43]"
                            : "border-white"
                        }`}
                      >
                        <RadioGroupItem
                          value="uzum"
                          className="hidden"
                          id="uzum"
                        />
                        <Label htmlFor="uzum" className="cursor-pointer">
                          <Image
                            src={"/apelsin-logo.png"}
                            alt="uzum"
                            width={78}
                            height={24}
                          />
                        </Label>
                      </div>
                      <div
                        className={`flex cursor-pointer rounded items-center border-[1px] px-2 py-2 space-x-2 ${
                          field.value === "click"
                            ? "border-[#2A9E43]"
                            : "border-white"
                        }`}
                      >
                        <RadioGroupItem
                          value="click"
                          className="hidden"
                          id="click"
                        />
                        <Label htmlFor="click" className="cursor-pointer">
                          <Image
                            src={"/click.png"}
                            alt="click"
                            width={78}
                            height={24}
                          />
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </FormWrapper>
    </section>
  );
}

export default Page;
