"use client";

import FormWrapper from "@/components/shared/FormWrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { regions, relationships } from "@/constants";
import { complexAccidentSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

function Page() {
  const form = useForm<z.infer<typeof complexAccidentSchema>>({
    resolver: zodResolver(complexAccidentSchema),
    defaultValues: {
      pasportRaqam: "",
      passportSeriya: "",
      jshshir: "",
      FIO: "",
      birthday: "",
      manzil: "",
      hudud: "",
      qarindoshFIO: "",
      qarindoshlikDarajasi: "",
      sugurtaManzil: "",
      telefonRaqam: "",
    },
  });

  function onSubmit(values: z.infer<typeof complexAccidentSchema>) {
    console.log(values);
  }

  return (
    <section className="container mx-auto max-md:px-4">
      <FormWrapper title="Jismoniy shasxlarni kompleks sugʻurta qilish">
        <h2 className="mb-3 font-semibold text-[15px]">
          1. Sugʻurta qildiruvchining pasport ma'lumotlari.
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
                      F.I.O.
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
                name="birthday"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Tug'ilgan kun
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="date"
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
                      Manzil
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="sugurtaManzil"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Sug‘urtalangan uy-joy manzili
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

            <FormField
              control={form.control}
              name="telefonRaqam"
              render={({ field }) => (
                <FormItem className="md:max-w-[350px]">
                  <FormLabel className="text-[15px] text-[#292929] font-normal">
                    Telefon raqam
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

            <h4 className="mb-3 font-semibold text-[15px]">
              Sug‘urtalangan shaxslar:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="qarindoshFIO"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Sugʻurtalanuvchi F.I.Sh.
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
                name="qarindoshlikDarajasi"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[15px] text-[#292929] font-normal">
                      Qarindoshlik darajasi.
                    </FormLabel>
                    <FormControl>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="border-[1px] border-[#d2d8dd] rounded-[15px] h-[43px] text-[#292929] focus:border-[#2A9E43] pl-2 outline-none font-medium text-[15px]">
                          <SelectValue placeholder="---" />
                        </SelectTrigger>
                        <SelectContent>
                          {relationships.map((item) => (
                            <SelectItem key={item.id} value={item.title}>
                              {item.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </FormWrapper>
    </section>
  );
}

export default Page;
