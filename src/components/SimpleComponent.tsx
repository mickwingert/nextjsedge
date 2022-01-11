import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps, StyleguideSpecimenFields } from 'lib/component-props';

type StyleguideComponentParamsProps = StyleguideComponentProps & StyleguideSpecimenFields & {
    fields: {
        MainHeading: Field<string>
    }
}

const SimpleComponent = (props: StyleguideComponentParamsProps): JSX.Element => {
 
    let cssClass = "text-red-600";

    cssClass = props.params ? props.params?.cssClass : "text-red-600";

    //const { cssClass } = props.params;
    return (
        <div>
            {/*<Text className={props.params.cssClass} field={props.fields.MainHeading} tag="h2"/> */}
            <Text className={cssClass} field={props.fields.MainHeading} tag="h2"/>
        </div>
    );
};

export default SimpleComponent;