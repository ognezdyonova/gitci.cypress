import EnvVarLoader from "../constants/variables/EnvVarLoader";
import dotenv from "dotenv";

export const apiRequestHeaders = accessToken => {
    return {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        Authorization: 'Bearer ' + accessToken
    }
};

export function env(name) {
    let value;
    try {
        if (Cypress.env(name)) {
            console.log("Cypress env: " + Cypress.env(name))
            value = Cypress.env(name);
        } else {
            throw new Error("Cypress env is not exist:" + name);
        }
    } catch (e) {
        if (name) {
            console.log("Request var:" + EnvVarLoader.get(name))
            value = EnvVarLoader.get(name)
        } else {
            console.log("All loaded vars:" + EnvVarLoader.get(null))
            value = EnvVarLoader.get(null)
        }
    }

    return value;
}

export function check_for_sorted($options, is_asscending, value) {
    const sub_group_array_source = [];
    $options.each((index, $option) => {
        if (index !== 0) {
            if (value === 'ass') {
                sub_group_array_source.push($option.text);
            } else {
                sub_group_array_source.push($option.text.toLowerCase());
            }
        }
    });
    const sub_groups = JSON.stringify(sub_group_array_source);
    const sorted_sub_groups_array = sub_group_array_source.sort();
    if (!is_asscending) {
        sorted_sub_groups_array.reverse();
    }
    const sorted_sub_groups = JSON.stringify(sorted_sub_groups_array);
    expect(sub_groups).to.eq(sorted_sub_groups);
}

export function check_for_options($options, values) {
    const options = [];
    $options.each((index, $option) => {
        if (index !== 0) {
            options.push($option.text.toLowerCase());
        }
    });

    expect(values.length).to.eq(options.length);
    options.forEach(option => {
        expect(values).contain(option);
    })
}


