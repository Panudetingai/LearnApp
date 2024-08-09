import { z } from "zod";

export const user = z.object({
    firstname: z.string(),
    lastname: z.string(),
    username: z.string(),
    password: z.string(),
})