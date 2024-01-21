import { apply_setup } from "./setup"
import { debug } from "@/lib/redux/debug"
import { setup } from "./local_setup"

export const get_new_space = (old_space) => {
    return apply_setup(setup, old_space)
}

export const color_getter = setup.color_getter
export const create_space = setup.get_init_position

debug({ setup })
