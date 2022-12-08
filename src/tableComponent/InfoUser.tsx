import "./infoUser.Module.css";

interface InfoUserModel {
  text: string;
  label: string;
  icon: any;
}

const InfoUserComponent = ({ text, label, icon }: InfoUserModel) => {
  return (
    <div className="info-user">
      {label && <p className="label-user">{label}</p>}
      {text && (
        <p className="text-user">
          <em>{text}</em>
        </p>
      )}
      {icon && <p className="icon-user">{icon}</p>}
    </div>
  );
};

export default InfoUserComponent;
