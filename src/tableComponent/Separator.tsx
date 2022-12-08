import "./Separator.Module.css";

interface SeparatorComponentModel {
  text: string;
  icon: any;
}

const SeparatorComponent = ({ text, icon }: SeparatorComponentModel) => {
  return (
    <div className="separator-text">
      <div className="separator-icon">
        <p className="text-icon">
          {icon}
          {text}
        </p>
      </div>
    </div>
  );
};

export default SeparatorComponent;
