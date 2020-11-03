import React, { useState, useEffect } from "react"
import { mapsEmbebed } from "../../lib/Functions/functions"
import { useForm } from "react-hook-form"


export const MapsEmbebed = () => {

    const [map, setMap] = useState()

    const { register, handleSubmit, errors } = useForm(
        {
            mode: "onSubmit"
        }
    );

    const getMap = async (data) => {
        console.log(data.url)
        const result = await mapsEmbebed(data.url)
        setMap(result)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(getMap)}>
                <p>Introduce URL MAPA aquí</p>
                <input type="text" name="url" ref={register({
                    required: false
                })} />
                <input type="submit" />
            </form>
            <div>
                {map && (map)}
                <div dangerouslySetInnerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m42!1m12!1m3!1d193632.9295209737!2d-4.605608268526859!3d40.68466459132764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m27!3e0!4m5!1s0xd40f93b15b5847f%3A0xa05155bb72dc3fb7!2sLa%20Ca%C3%B1ada!3m2!1d40.5996641!2d-4.49398!4m5!1s0xd40f31b5bf84b6b%3A0xc0f6450ab995ad4a!2zw4F2aWxh!3m2!1d40.656684999999996!2d-4.6812086!4m5!1s0xd40e213d9fcebdb%3A0xdd1d9162c13ac3b!2sVillacast%C3%ADn!3m2!1d40.7798462!2d-4.4117789!4m3!3m2!1d40.705872299999996!2d-4.3318256!4m3!3m2!1d40.5971786!2d-4.4942918999999995!5e0!3m2!1ses!2ses!4v1604384373758!5m2!1ses!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>/>' />
            </div>
        </div>
    )

}