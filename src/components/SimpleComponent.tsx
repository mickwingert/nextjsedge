import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps, StyleguideSpecimenFields } from 'lib/component-props';

type StyleguideComponentParamsProps = StyleguideComponentProps & StyleguideSpecimenFields & {
    fields: {
        MainHeading: Field<string>
    },
    params: {
        cssClass: string
    }
}

const SimpleComponent = (props: StyleguideComponentParamsProps): JSX.Element => {
    const { cssClass } = props.params;
    
    return (
    <div>
        <Text className={cssClass} field={props.fields.MainHeading} tag="h2"/>
    </div>
    );
};

export default SimpleComponent;