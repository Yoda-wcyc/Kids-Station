(()=>{var Lp=Object.defineProperty;var Ms=(n,t)=>{for(var e in t)Lp(n,e,{get:t[e],enumerable:!0})};var ju=0,wc=1,Qu=2;var kr=1,tf=2,qs=3,qi=0,yn=1,Nn=2,ui=0,Ys=1,Ec=2,Tc=3,Ac=4,ef=5;var ls=100,nf=101,sf=102,rf=103,of=104,af=200,lf=201,cf=202,hf=203,Cc=204,Rc=205,uf=206,ff=207,df=208,pf=209,mf=210,gf=211,xf=212,_f=213,yf=214,Zo=0,Jo=1,Ko=2,ks=3,jo=4,Qo=5,ta=6,ea=7,Ic=0,vf=1,Mf=2,qn=0,Pc=1,Lc=2,Dc=3,Nc=4,Uc=5,Fc=6,Oc=7;var Bc=300,Yi=301,cs=302,Pa=303,La=304,Vr=306,na=1e3,ri=1001,ia=1002,on=1003,Sf=1004;var Gr=1005;var $e=1006,Da=1007;var $i=1008;var Pn=1009,zc=1010,kc=1011,$s=1012,Na=1013,Yn=1014,$n=1015,Zn=1016,Ua=1017,Fa=1018,Zs=1020,Vc=35902,Gc=35899,Hc=1021,Wc=1022,Un=1023,oi=1026,Zi=1027,Xc=1028,Oa=1029,Ji=1030,Ba=1031;var za=1033,Hr=33776,Wr=33777,Xr=33778,qr=33779,ka=35840,Va=35841,Ga=35842,Ha=35843,Wa=36196,Xa=37492,qa=37496,Ya=37488,$a=37489,Yr=37490,Za=37491,Ja=37808,Ka=37809,ja=37810,Qa=37811,tl=37812,el=37813,nl=37814,il=37815,sl=37816,rl=37817,ol=37818,al=37819,ll=37820,cl=37821,hl=36492,ul=36494,fl=36495,dl=36283,pl=36284,$r=36285,ml=36286;var yr=2300,sa=2301,qo=2302,xc=2303,_c=2400,yc=2401,vc=2402;var bf=3200;var qc=0,wf=1,Ei="",rn="srgb",vr="srgb-linear",Mr="linear",we="srgb";var Yo=7680;var Ef=519,Tf=512,Af=513,Cf=514,gl=515,Rf=516,If=517,xl=518,Pf=519,Yc=35044;var $c="300 es",Hn=2e3,Sr=2001;function Dp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Np(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lf(){let n=br("canvas");return n.style.display="block",n}var Eu={},Vs=null;function wr(...n){let t="THREE."+n.shift();Vs?Vs("log",t,...n):console.log(t,...n)}function Df(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Kt(...n){n=Df(n);let t="THREE."+n.shift();if(Vs)Vs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ee(...n){n=Df(n);let t="THREE."+n.shift();if(Vs)Vs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ss(...n){let t=n.join(" ");t in Eu||(Eu[t]=!0,Kt(...n))}function Nf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Uf={[Zo]:Jo,[Ko]:ta,[jo]:ea,[ks]:Qo,[Jo]:Zo,[ta]:Ko,[ea]:jo,[Qo]:ks},ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $o=Math.PI/180,ra=180/Math.PI;function Oi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function xe(n,t,e){return Math.max(t,Math.min(e,n))}function Up(n,t){return(n%t+t)%t}function Yl(n,t,e){return(1-e)*n+e*t}function ii(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qc=class Qc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qc.prototype.isVector2=!0;var he=Qc,li=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],m=r[o+1],x=r[o+2],v=r[o+3];if(h!==v||l!==f||c!==m||u!==x){let d=l*f+c*m+u*x+h*v;d<0&&(f=-f,m=-m,x=-x,v=-v,d=-d);let p=1-a;if(d<.9995){let A=Math.acos(d),L=Math.sin(A);p=Math.sin(p*A)/L,a=Math.sin(a*A)/L,l=l*p+f*a,c=c*p+m*a,u=u*p+x*a,h=h*p+v*a}else{l=l*p+f*a,c=c*p+m*a,u=u*p+x*a,h=h*p+v*a;let A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],x=r[o+3];return t[e]=a*x+u*h+l*m-c*f,t[e+1]=l*x+u*f+c*h-a*m,t[e+2]=c*x+u*m+a*f-l*h,t[e+3]=u*x-a*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"YXZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"ZXY":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"ZYX":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"YZX":this._x=f*u*h+c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h-f*m*x;break;case"XZY":this._x=f*u*h-c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h+f*m*x;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){let m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},th=class th{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};th.prototype.isVector3=!0;var $=th,$l=new $,Tu=new li,eh=class eh{constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],x=i[8],v=s[0],d=s[3],p=s[6],A=s[1],L=s[4],b=s[7],T=s[2],E=s[5],D=s[8];return r[0]=o*v+a*A+l*T,r[3]=o*d+a*L+l*E,r[6]=o*p+a*b+l*D,r[1]=c*v+u*A+h*T,r[4]=c*d+u*L+h*E,r[7]=c*p+u*b+h*D,r[2]=f*v+m*A+x*T,r[5]=f*d+m*L+x*E,r[8]=f*p+m*b+x*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,x=e*h+i*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zl.makeScale(t,e)),this}rotate(t){return ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zl.makeRotation(-t)),this}translate(t,e){return ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};eh.prototype.isMatrix3=!0;var re=eh,Zl=new re,Au=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fp(){let n={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vr]:{primaries:t,whitePoint:i,transfer:Mr,toXYZ:Au,fromXYZ:Cu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:i,transfer:we,toXYZ:Au,fromXYZ:Cu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}var pe=Fp();function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ss,oa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ss===void 0&&(Ss=br("canvas")),Ss.width=t.width,Ss.height=t.height;let s=Ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ss}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(wi(e[i]/255)*255):e[i]=wi(e[i]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Op=0,Gs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jl(s[o].image)):r.push(Jl(s[o]))}else r=Jl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Jl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?oa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var Bp=0,Kl=new $,an=class n extends ai{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ri,s=ri,r=$e,o=$i,a=Un,l=Pn,c=n.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Oi(),this.name="",this.source=new Gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kl).x}get height(){return this.source.getSize(Kl).y}get depth(){return this.source.getSize(Kl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case na:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case na:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Bc;an.DEFAULT_ANISOTROPY=1;var nh=class nh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],x=l[9],v=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(x+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,b=(m+1)/2,T=(p+1)/2,E=(u+f)/4,D=(h+v)/4,M=(x+d)/4;return L>b&&L>T?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=E/i,r=D/i):b>T?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=M/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=D/r,s=M/r),this.set(i,s,r,e),this}let A=Math.sqrt((d-x)*(d-x)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(d-x)/A,this.y=(h-v)/A,this.z=(f-u)/A,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=xe(this.x,t.x,e.x),this.y=xe(this.y,t.y,e.y),this.z=xe(this.z,t.z,e.z),this.w=xe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=xe(this.x,t,e),this.y=xe(this.y,t,e),this.z=xe(this.z,t,e),this.w=xe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(xe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nh.prototype.isVector4=!0;var Ve=nh,aa=class extends ai{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new an(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends aa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Er=class extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var la=class extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ia=class Ia{constructor(t,e,i,s,r,o,a,l,c,u,h,f,m,x,v,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,m,x,v,d)}set(t,e,i,s,r,o,a,l,c,u,h,f,m,x,v,d){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=x,p[11]=v,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ia().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),o=1/bs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,m=o*h,x=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+x*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=x+m*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,m=l*h,x=c*u,v=c*h;e[0]=f+v*a,e[4]=x*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-x,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,m=l*h,x=c*u,v=c*h;e[0]=f-v*a,e[4]=-o*h,e[8]=x+m*a,e[1]=m+x*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,m=o*h,x=a*u,v=a*h;e[0]=l*u,e[4]=x*c-m,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=m*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,m=o*c,x=a*l,v=a*c;e[0]=l*u,e[4]=v-f*h,e[8]=x*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+x,e[10]=f-v*h}else if(t.order==="XZY"){let f=o*l,m=o*c,x=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=o*u,e[9]=m*h-x,e[2]=x*h-m,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zp,t,kp)}lookAt(t,e,i){let s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Li.crossVectors(i,An),Li.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Li.crossVectors(i,An)),Li.normalize(),xo.crossVectors(An,Li),s[0]=Li.x,s[4]=xo.x,s[8]=An.x,s[1]=Li.y,s[5]=xo.y,s[9]=An.y,s[2]=Li.z,s[6]=xo.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],x=i[2],v=i[6],d=i[10],p=i[14],A=i[3],L=i[7],b=i[11],T=i[15],E=s[0],D=s[4],M=s[8],w=s[12],C=s[1],N=s[5],H=s[9],U=s[13],I=s[2],B=s[6],Y=s[10],Z=s[14],st=s[3],O=s[7],ot=s[11],nt=s[15];return r[0]=o*E+a*C+l*I+c*st,r[4]=o*D+a*N+l*B+c*O,r[8]=o*M+a*H+l*Y+c*ot,r[12]=o*w+a*U+l*Z+c*nt,r[1]=u*E+h*C+f*I+m*st,r[5]=u*D+h*N+f*B+m*O,r[9]=u*M+h*H+f*Y+m*ot,r[13]=u*w+h*U+f*Z+m*nt,r[2]=x*E+v*C+d*I+p*st,r[6]=x*D+v*N+d*B+p*O,r[10]=x*M+v*H+d*Y+p*ot,r[14]=x*w+v*U+d*Z+p*nt,r[3]=A*E+L*C+b*I+T*st,r[7]=A*D+L*N+b*B+T*O,r[11]=A*M+L*H+b*Y+T*ot,r[15]=A*w+L*U+b*Z+T*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],x=t[3],v=t[7],d=t[11],p=t[15],A=l*m-c*f,L=a*m-c*h,b=a*f-l*h,T=o*m-c*u,E=o*f-l*u,D=o*h-a*u;return e*(v*A-d*L+p*b)-i*(x*A-d*T+p*E)+s*(x*L-v*T+p*D)-r*(x*b-v*E+d*D)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],x=t[12],v=t[13],d=t[14],p=t[15],A=e*a-i*o,L=e*l-s*o,b=e*c-r*o,T=i*l-s*a,E=i*c-r*a,D=s*c-r*l,M=u*v-h*x,w=u*d-f*x,C=u*p-m*x,N=h*d-f*v,H=h*p-m*v,U=f*p-m*d,I=A*U-L*H+b*N+T*C-E*w+D*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return t[0]=(a*U-l*H+c*N)*B,t[1]=(s*H-i*U-r*N)*B,t[2]=(v*D-d*E+p*T)*B,t[3]=(f*E-h*D-m*T)*B,t[4]=(l*C-o*U-c*w)*B,t[5]=(e*U-s*C+r*w)*B,t[6]=(d*b-x*D-p*L)*B,t[7]=(u*D-f*b+m*L)*B,t[8]=(o*H-a*C+c*M)*B,t[9]=(i*C-e*H-r*M)*B,t[10]=(x*E-v*b+p*A)*B,t[11]=(h*b-u*E-m*A)*B,t[12]=(a*w-o*N-l*M)*B,t[13]=(e*N-i*w+s*M)*B,t[14]=(v*L-x*T-d*A)*B,t[15]=(u*T-h*L+f*A)*B,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,x=r*h,v=o*u,d=o*h,p=a*h,A=l*c,L=l*u,b=l*h,T=i.x,E=i.y,D=i.z;return s[0]=(1-(v+p))*T,s[1]=(m+b)*T,s[2]=(x-L)*T,s[3]=0,s[4]=(m-b)*E,s[5]=(1-(f+p))*E,s[6]=(d+A)*E,s[7]=0,s[8]=(x+L)*D,s[9]=(d-A)*D,s[10]=(1-(f+v))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=bs.set(s[0],s[1],s[2]).length(),a=bs.set(s[4],s[5],s[6]).length(),l=bs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),zn.copy(this);let c=1/o,u=1/a,h=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,e.setFromRotationMatrix(zn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Hn,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),m=(i+s)/(i-s),x,v;if(l)x=r/(o-r),v=o*r/(o-r);else if(a===Hn)x=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Sr)x=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Hn,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),m=-(i+s)/(i-s),x,v;if(l)x=1/(o-r),v=o/(o-r);else if(a===Hn)x=-2/(o-r),v=-(o+r)/(o-r);else if(a===Sr)x=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ia.prototype.isMatrix4=!0;var Be=Ia,bs=new $,zn=new Be,zp=new $(0,0,0),kp=new $(1,1,1),Li=new $,xo=new $,An=new $,Ru=new Be,Iu=new li,Bi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ru,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vp=0,Pu=new $,ws=new li,yi=new Be,_o=new $,ur=new $,Gp=new $,Hp=new li,Lu=new $(1,0,0),Du=new $(0,1,0),Nu=new $(0,0,1),Uu={type:"added"},Wp={type:"removed"},Es={type:"childadded",child:null},jl={type:"childremoved",child:null},_n=class n extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new $,e=new Bi,i=new li,s=new $(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new re}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(Lu,t)}rotateY(t){return this.rotateOnAxis(Du,t)}rotateZ(t){return this.rotateOnAxis(Nu,t)}translateOnAxis(t,e){return Pu.copy(t).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lu,t)}translateY(t){return this.translateOnAxis(Du,t)}translateZ(t){return this.translateOnAxis(Nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_o.copy(t):_o.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(ur,_o,this.up):yi.lookAt(_o,ur,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(yi),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uu),Es.child=t,this.dispatchEvent(Es),Es.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wp),jl.child=t,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uu),Es.child=t,this.dispatchEvent(Es),Es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,Gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new $(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xp={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let d=e.getJointPose(v,i),p=this._getHandJoint(c,v);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Wn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Ql(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var se=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=Up(t,1),e=xe(e,0,1),i=xe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ql(o,r,t+1/3),this.g=Ql(o,r,t),this.b=Ql(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let i=Ff[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return pe.workingToColorSpace(un.copy(this),t),Math.round(xe(un.r*255,0,255))*65536+Math.round(xe(un.g*255,0,255))*256+Math.round(xe(un.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(un.copy(this),e);let i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=rn){pe.workingToColorSpace(un.copy(this),t);let e=un.r,i=un.g,s=un.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(yo);let i=Yl(Di.h,yo.h,e),s=Yl(Di.s,yo.s,e),r=Yl(Di.l,yo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new se;se.NAMES=Ff;var Ar=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},kn=new $,vi=new $,tc=new $,Mi=new $,Ts=new $,As=new $,Fu=new $,ec=new $,nc=new $,ic=new $,sc=new Ve,rc=new Ve,oc=new Ve,si=class n{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),kn.subVectors(t,e),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){kn.subVectors(s,e),vi.subVectors(i,e),tc.subVectors(t,e);let o=kn.dot(kn),a=kn.dot(vi),l=kn.dot(tc),c=vi.dot(vi),u=vi.dot(tc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,m=(c*l-a*u)*f,x=(o*u-a*l)*f;return r.set(1-m-x,x,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return sc.setScalar(0),rc.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(t,e),rc.fromBufferAttribute(t,i),oc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(sc,r.x),o.addScaledVector(rc,r.y),o.addScaledVector(oc,r.z),o}static isFrontFacing(t,e,i,s){return kn.subVectors(i,e),vi.subVectors(t,e),kn.cross(vi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),kn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ts.subVectors(s,i),As.subVectors(r,i),ec.subVectors(t,i);let l=Ts.dot(ec),c=As.dot(ec);if(l<=0&&c<=0)return e.copy(i);nc.subVectors(t,s);let u=Ts.dot(nc),h=As.dot(nc);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ts,o);ic.subVectors(t,r);let m=Ts.dot(ic),x=As.dot(ic);if(x>=0&&m<=x)return e.copy(r);let v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(i).addScaledVector(As,a);let d=u*x-m*h;if(d<=0&&h-u>=0&&m-x>=0)return Fu.subVectors(r,s),a=(h-u)/(h-u+(m-x)),e.copy(s).addScaledVector(Fu,a);let p=1/(d+v+f);return o=v*p,a=f*p,e.copy(i).addScaledVector(Ts,o).addScaledVector(As,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zi=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),Mo.subVectors(this.max,fr),Cs.subVectors(t.a,fr),Rs.subVectors(t.b,fr),Is.subVectors(t.c,fr),Ni.subVectors(Rs,Cs),Ui.subVectors(Is,Rs),ts.subVectors(Cs,Is);let e=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-ts.z,ts.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,ts.z,0,-ts.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-ts.y,ts.x,0];return!ac(e,Cs,Rs,Is,Mo)||(e=[1,0,0,0,1,0,0,0,1],!ac(e,Cs,Rs,Is,Mo))?!1:(So.crossVectors(Ni,Ui),e=[So.x,So.y,So.z],ac(e,Cs,Rs,Is,Mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new $,new $,new $,new $,new $,new $,new $,new $],Vn=new $,vo=new zi,Cs=new $,Rs=new $,Is=new $,Ni=new $,Ui=new $,ts=new $,fr=new $,Mo=new $,So=new $,es=new $;function ac(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){es.fromArray(n,r);let a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),u=i.dot(es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ye=new $,bo=new he,qp=0,He=class extends ai{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yc,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Cr=class extends He{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Rr=class extends He{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var xn=class extends He{constructor(t,e,i){super(new Float32Array(t),e,i)}},Yp=new zi,dr=new $,lc=new $,ki=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Yp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(dr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(lc)),this.expandByPoint(dr.copy(t.center).sub(lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$p=0,Dn=new Be,cc=new _n,Ps=new $,Cn=new zi,pr=new zi,sn=new $,Qe=class n extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dp(t)?Rr:Cr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new re().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,i){return Dn.makeTranslation(t,e,i),this.applyMatrix4(Dn),this}scale(t,e,i){return Dn.makeScale(t,e,i),this.applyMatrix4(Dn),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xn(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Cn.min,pr.min),Cn.expandByPoint(sn),sn.addVectors(Cn.max,pr.max),Cn.expandByPoint(sn)):(Cn.expandByPoint(pr.min),Cn.expandByPoint(pr.max))}Cn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(t,c),sn.add(Ps)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new He(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<i.count;M++)a[M]=new $,l[M]=new $;let c=new $,u=new $,h=new $,f=new he,m=new he,x=new he,v=new $,d=new $;function p(M,w,C){c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,C),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,w),x.fromBufferAttribute(r,C),u.sub(c),h.sub(c),m.sub(f),x.sub(f);let N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(N),d.copy(h).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(N),a[M].add(v),a[w].add(v),a[C].add(v),l[M].add(d),l[w].add(d),l[C].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let M=0,w=A.length;M<w;++M){let C=A[M],N=C.start,H=C.count;for(let U=N,I=N+H;U<I;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let L=new $,b=new $,T=new $,E=new $;function D(M){T.fromBufferAttribute(s,M),E.copy(T);let w=a[M];L.copy(w),L.sub(T.multiplyScalar(T.dot(w))).normalize(),b.crossVectors(E,w);let N=b.dot(l[M])<0?-1:1;o.setXYZW(M,L.x,L.y,L.z,N)}for(let M=0,w=A.length;M<w;++M){let C=A[M],N=C.start,H=C.count;for(let U=N,I=N+H;U<I;U+=3)D(t.getX(U+0)),D(t.getX(U+1)),D(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new $,r=new $,o=new $,a=new $,l=new $,c=new $,u=new $,h=new $;if(t)for(let f=0,m=t.count;f<m;f+=3){let x=t.getX(f+0),v=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,d),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),m=0,x=0;for(let v=0,d=l.length;v<d;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let p=0;p<u;p++)f[x++]=c[m++]}return new He(f,u,h)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ca=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yc,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},gn=new $,Ir=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),i=Pe(i,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hc=new $,Zp=new $,Jp=new re,Gn=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=hc.subVectors(i,e).cross(Zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(hc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Jp.getNormalMatrix(t),s=this.coplanarPoint(hc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Kp=0,ci=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Ys,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Rc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Gn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new he().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Vi=class extends ci{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ls,mr=new $,Ds=new $,Ns=new $,Us=new he,gr=new he,Of=new Be,wo=new $,xr=new $,Eo=new $,Ou=new he,uc=new he,Bu=new he,rs=class extends _n{constructor(t=new Vi){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new Qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ca(e,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new Ir(i,3,0,!1)),Ls.setAttribute("uv",new Ir(i,2,3,!1))}this.geometry=Ls,this.material=t,this.center=new he(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),Of.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Ns.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;To(wo.set(-.5,-.5,0),Ns,o,Ds,s,r),To(xr.set(.5,-.5,0),Ns,o,Ds,s,r),To(Eo.set(.5,.5,0),Ns,o,Ds,s,r),Ou.set(0,0),uc.set(1,0),Bu.set(1,1);let a=t.ray.intersectTriangle(wo,xr,Eo,!1,mr);if(a===null&&(To(xr.set(-.5,.5,0),Ns,o,Ds,s,r),uc.set(0,1),a=t.ray.intersectTriangle(wo,Eo,xr,!1,mr),a===null))return;let l=t.ray.origin.distanceTo(mr);l<t.near||l>t.far||e.push({distance:l,point:mr.clone(),uv:si.getInterpolation(mr,wo,xr,Eo,Ou,uc,Bu,new he),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function To(n,t,e,i,s,r){Us.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(gr.x=r*Us.x-s*Us.y,gr.y=s*Us.x+r*Us.y):gr.copy(Us),n.copy(t),n.x+=gr.x,n.y+=gr.y,n.applyMatrix4(Of)}var bi=new $,fc=new $,Ao=new $,Co=new $,Ws=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){fc.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),Co.copy(this.origin).sub(fc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ao),a=Co.dot(this.direction),l=-Co.dot(Ao),c=Co.lengthSq(),u=Math.abs(1-o*o),h,f,m,x;if(u>0)if(h=o*l-a,f=o*a-l,x=r*u,h>=0)if(f>=-x)if(f<=x){let v=1/u;h*=v,f*=v,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(fc).addScaledVector(Ao,f),m}intersectSphere(t,e){if(t.radius<0)return null;bi.subVectors(t.center,this.origin);let i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,m=t.z-o.z,x=e.x-o.x,v=e.y-o.y,d=e.z-o.z,p=i.x-o.x,A=i.y-o.y,L=i.z-o.z,b=Math.abs(l),T=Math.abs(c),E=Math.abs(u),D,M,w,C,N,H,U,I,B,Y,Z,st;if(b>=T&&b>=E?(w=l,H=h,B=x,st=p,l>=0?(D=c,M=u,C=f,N=m,U=v,I=d,Y=A,Z=L):(D=u,M=c,C=m,N=f,U=d,I=v,Y=L,Z=A)):T>=E?(w=c,H=f,B=v,st=A,c>=0?(D=u,M=l,C=m,N=h,U=d,I=x,Y=L,Z=p):(D=l,M=u,C=h,N=m,U=x,I=d,Y=p,Z=L)):(w=u,H=m,B=d,st=L,u>=0?(D=l,M=c,C=h,N=f,U=x,I=v,Y=p,Z=A):(D=c,M=l,C=f,N=h,U=v,I=x,Y=A,Z=p)),w===0)return null;let O=D/w,ot=M/w,nt=1/w,Mt=C-O*H,dt=N-ot*H,yt=U-O*B,bt=I-ot*B,xt=Y-O*st,q=Z-ot*st,et=xt*bt-q*yt,pt=Mt*q-dt*xt,Lt=yt*dt-bt*Mt;if(s){if(et<0||pt<0||Lt<0)return null}else if((et<0||pt<0||Lt<0)&&(et>0||pt>0||Lt>0))return null;let ut=et+pt+Lt;if(ut===0)return null;let Ft=nt*(et*H+pt*B+Lt*st);return(ut>0?Ft<0:Ft>0)?null:this.at(Ft/ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xn=class extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},zu=new Be,ns=new Ws,Ro=new ki,ku=new $,Io=new $,Po=new $,Lo=new $,dc=new $,Do=new $,Vu=new $,No=new $,We=class extends _n{constructor(t=new Qe,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(dc.fromBufferAttribute(h,t),o?Do.addScaledVector(dc,u):Do.addScaledVector(dc.sub(e),u))}e.add(Do)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(Ro.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Ro,ku)===null||ns.origin.distanceToSquared(ku)>(t.far-t.near)**2))&&(zu.copy(r).invert(),ns.copy(t.ray).applyMatrix4(zu),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let d=f[x],p=o[d.materialIndex],A=Math.max(d.start,m.start),L=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let b=A,T=L;b<T;b+=3){let E=a.getX(b),D=a.getX(b+1),M=a.getX(b+2);s=Uo(this,p,t,i,c,u,h,E,D,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let d=x,p=v;d<p;d+=3){let A=a.getX(d),L=a.getX(d+1),b=a.getX(d+2);s=Uo(this,o,t,i,c,u,h,A,L,b),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let d=f[x],p=o[d.materialIndex],A=Math.max(d.start,m.start),L=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let b=A,T=L;b<T;b+=3){let E=b,D=b+1,M=b+2;s=Uo(this,p,t,i,c,u,h,E,D,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let d=x,p=v;d<p;d+=3){let A=d,L=d+1,b=d+2;s=Uo(this,o,t,i,c,u,h,A,L,b),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function jp(n,t,e,i,s,r,o,a){let l;if(t.side===yn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===qi,a),l===null)return null;No.copy(a),No.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(No);return c<e.near||c>e.far?null:{distance:c,point:No.clone(),object:n}}function Uo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Io),n.getVertexPosition(l,Po),n.getVertexPosition(c,Lo);let u=jp(n,t,e,i,Io,Po,Lo,Vu);if(u){let h=new $;si.getBarycoord(Vu,Io,Po,Lo,h),s&&(u.uv=si.getInterpolatedAttribute(s,a,l,c,h,new he)),r&&(u.uv1=si.getInterpolatedAttribute(r,a,l,c,h,new he)),o&&(u.normal=si.getInterpolatedAttribute(o,a,l,c,h,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};si.getNormal(Io,Po,Lo,f.normal),u.face=f,u.barycoord=h}return u}var ha=class extends an{constructor(t=null,e=1,i=1,s,r,o,a,l,c=on,u=on,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var is=new ki,Qp=new he(.5,.5),Fo=new $,Pr=class{constructor(t=new Gn,e=new Gn,i=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],m=r[7],x=r[8],v=r[9],d=r[10],p=r[11],A=r[12],L=r[13],b=r[14],T=r[15];if(s[0].setComponents(c-o,m-u,p-x,T-A).normalize(),s[1].setComponents(c+o,m+u,p+x,T+A).normalize(),s[2].setComponents(c+a,m+h,p+v,T+L).normalize(),s[3].setComponents(c-a,m-h,p-v,T-L).normalize(),i)s[4].setComponents(l,f,d,b).normalize(),s[5].setComponents(c-l,m-f,p-d,T-b).normalize();else if(s[4].setComponents(c-l,m-f,p-d,T-b).normalize(),e===Hn)s[5].setComponents(c+l,m+f,p+d,T+b).normalize();else if(e===Sr)s[5].setComponents(l,f,d,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);let e=Qp.distanceTo(t.center);return is.radius=.7071067811865476+e,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Fo.x=s.normal.x>0?t.max.x:t.min.x,Fo.y=s.normal.y>0?t.max.y:t.min.y,Fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var os=class extends ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ua=new $,fa=new $,Gu=new Be,_r=new Ws,Oo=new ki,pc=new $,Hu=new $,da=class extends _n{constructor(t=new Qe,e=new os){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ua.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ua.distanceTo(fa);t.setAttribute("lineDistance",new xn(i,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,t.ray.intersectsSphere(Oo)===!1)return;Gu.copy(s).invert(),_r.copy(t.ray).applyMatrix4(Gu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let v=m,d=x-1;v<d;v+=c){let p=u.getX(v),A=u.getX(v+1),L=Bo(this,t,_r,l,p,A,v);L&&e.push(L)}if(this.isLineLoop){let v=u.getX(x-1),d=u.getX(m),p=Bo(this,t,_r,l,v,d,x-1);p&&e.push(p)}}else{let m=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let v=m,d=x-1;v<d;v+=c){let p=Bo(this,t,_r,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=Bo(this,t,_r,l,x-1,m,x-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bo(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(ua.fromBufferAttribute(a,s),fa.fromBufferAttribute(a,r),e.distanceSqToSegment(ua,fa,pc,Hu)>i)return;pc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(pc);if(!(c<t.near||c>t.far))return{distance:c,point:Hu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Wu=new $,Xu=new $,as=class extends da{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Wu.fromBufferAttribute(e,s),Xu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wu.distanceTo(Xu);t.setAttribute("lineDistance",new xn(i,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Xs=class extends ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qu=new Be,Mc=new Ws,zo=new ki,ko=new $,Lr=class extends _n{constructor(t=new Qe,e=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,t.ray.intersectsSphere(zo)===!1)return;qu.copy(s).invert(),Mc.copy(t.ray).applyMatrix4(qu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=f,v=m;x<v;x++){let d=c.getX(x);ko.fromBufferAttribute(h,d),Yu(ko,d,l,s,t,e,this)}}else{let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,v=m;x<v;x++)ko.fromBufferAttribute(h,x),Yu(ko,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yu(n,t,e,i,s,r,o){let a=Mc.distanceSqToPoint(n);if(a<e){let l=new $;Mc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Dr=class extends an{constructor(t=[],e=Yi,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hi=class extends an{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gi=class extends an{constructor(t,e,i=Yn,s,r,o,a=on,l=on,c,u=oi,h=1){if(u!==oi&&u!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pa=class extends Gi{constructor(t,e=Yn,i=Yi,s,r,o=on,a=on,l,c=oi){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Nr=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Rn=class n extends Qe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,m=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(h,2));function x(v,d,p,A,L,b,T,E,D,M,w){let C=b/D,N=T/M,H=b/2,U=T/2,I=E/2,B=D+1,Y=M+1,Z=0,st=0,O=new $;for(let ot=0;ot<Y;ot++){let nt=ot*N-U;for(let Mt=0;Mt<B;Mt++){let dt=Mt*C-H;O[v]=dt*A,O[d]=nt*L,O[p]=I,c.push(O.x,O.y,O.z),O[v]=0,O[d]=0,O[p]=E>0?1:-1,u.push(O.x,O.y,O.z),h.push(Mt/D),h.push(1-ot/M),Z+=1}}for(let ot=0;ot<M;ot++)for(let nt=0;nt<D;nt++){let Mt=f+nt+B*ot,dt=f+nt+B*(ot+1),yt=f+(nt+1)+B*(ot+1),bt=f+(nt+1)+B*ot;l.push(Mt,dt,bt),l.push(dt,yt,bt),st+=6}a.addGroup(m,st,w),m+=st,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Vo=new $,Go=new $,mc=new $,Ho=new si,Ur=class extends Qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos($o*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},m=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);let{a:v,b:d,c:p}=Ho;if(v.fromBufferAttribute(a,c[0]),d.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Ho.getNormal(mc),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let A=0;A<3;A++){let L=(A+1)%3,b=h[A],T=h[L],E=Ho[u[A]],D=Ho[u[L]],M=`${b}_${T}`,w=`${T}_${b}`;w in f&&f[w]?(mc.dot(f[w].normal)<=r&&(m.push(E.x,E.y,E.z),m.push(D.x,D.y,D.z)),f[w]=null):M in f||(f[M]={index0:c[A],index1:c[L],normal:mc.clone()})}}for(let x in f)if(f[x]){let{index0:v,index1:d}=f[x];Vo.fromBufferAttribute(a,v),Go.fromBufferAttribute(a,d),m.push(Vo.x,Vo.y,Vo.z),m.push(Go.x,Go.y,Go.z)}this.setAttribute("position",new xn(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Fr=class n extends Qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,m=[],x=[],v=[],d=[];for(let p=0;p<u;p++){let A=p*f-o;for(let L=0;L<c;L++){let b=L*h-r;x.push(b,-A,0),v.push(0,0,1),d.push(L/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){let L=A+c*p,b=A+c*(p+1),T=A+1+c*(p+1),E=A+1+c*p;m.push(L,b,E),m.push(b,T,E)}this.setIndex(m),this.setAttribute("position",new xn(x,3)),this.setAttribute("normal",new xn(v,3)),this.setAttribute("uv",new xn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function hs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if($u(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if($u(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function pn(n){let t={};for(let e=0;e<n.length;e++){let i=hs(n[e]);for(let s in i)t[s]=i[s]}return t}function $u(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function tm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Zc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Bf={clone:hs,merge:pn},em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=em,this.fragmentShader=nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=tm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new se().setHex(s.value);break;case"v2":this.uniforms[i].value=new he().fromArray(s.value);break;case"v3":this.uniforms[i].value=new $().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"m3":this.uniforms[i].value=new re().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Be().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ma=class extends dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ga=class extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xa=class extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Fs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function gc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Hi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_a=class extends Hi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_c,endingEnd:_c}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yc:r=t,a=2*e-i;break;case vc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case yc:o=t,l=2*i-e;break;case vc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(i-e)/(s-e),v=x*x,d=v*x,p=-f*d+2*f*v-f*x,A=(1+f)*d+(-1.5-2*f)*v+(-.5+f)*x+1,L=(-1-m)*d+(1.5+m)*v+.5*x,b=m*d-m*v;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+A*o[c+T]+L*o[l+T]+b*o[h+T];return r}},ya=class extends Hi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},va=class extends Hi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ma=class extends Hi{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let x=(i-e)/(s-e),v=1-x;for(let d=0;d!==a;++d)r[d]=o[c+d]*v+o[l+d]*x;return r}let f=a*2,m=t-1;for(let x=0;x!==a;++x){let v=o[c+x],d=o[l+x],p=m*f+x*2,A=h[p],L=h[p+1],b=t*f+x*2,T=u[b],E=u[b+1],D=sm(i,e,A,T,s);r[x]=zf(D,v,L,E,d)}return r}};function zf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function im(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function sm(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=zf(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=im(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var In=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fs(e,this.TimeBufferType),this.values=Fs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Fs(t.times,Array),values:Fs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),gc(t.settings)&&(i.settings={inTangents:Fs(t.settings.inTangents,Array),outTangents:Fs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ma(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case sa:e=this.InterpolantFactoryMethodLinear;break;case qo:e=this.InterpolantFactoryMethodSmooth;break;case xc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Kt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return qo;case this.InterpolantFactoryMethodBezier:return xc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;gc(this.settings)&&(Zu(this.settings.inTangents,t),Zu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Np(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*i,f=h-i,m=h+i;for(let x=0;x!==i;++x){let v=e[h+x];if(v!==e[f+x]||v!==e[m+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*i,f=o*i;for(let m=0;m!==i;++m)e[f+m]=e[h+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,gc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=sa;var Wi=class extends In{constructor(t,e,i){super(t,e,i)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=yr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends In{constructor(t,e,i,s){super(t,e,i,s)}};Sa.prototype.ValueTypeName="color";var ba=class extends In{constructor(t,e,i,s){super(t,e,i,s)}};ba.prototype.ValueTypeName="number";var wa=class extends Hi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)li.slerpFlat(r,0,o,c-a,o,c,l);return r}},Or=class extends In{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new wa(this.times,this.values,this.getValueSize(),t)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends In{constructor(t,e,i){super(t,e,i)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=yr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends In{constructor(t,e,i,s){super(t,e,i,s)}};Ea.prototype.ValueTypeName="vector";var Ta=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kf=new Ta,Aa=class{constructor(t){this.manager=t!==void 0?t:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wo=new $,Xo=new li,ni=new $,Br=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wo,Xo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Wo,Xo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fi=new $,Ju=new he,Ku=new he,fn=class extends Br{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ra*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Ju,Ku),e.subVectors(Ku,Ju)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($o*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zr=class extends Br{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Os=-90,Bs=1,Ca=class extends _n{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Os,Bs,t,e);s.layers=this.layers,this.add(s);let r=new fn(Os,Bs,t,e);r.layers=this.layers,this.add(r);let o=new fn(Os,Bs,t,e);o.layers=this.layers,this.add(o);let a=new fn(Os,Bs,t,e);a.layers=this.layers,this.add(a);let l=new fn(Os,Bs,t,e);l.layers=this.layers,this.add(l);let c=new fn(Os,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Ra=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Jc="\\[\\]\\.:\\/",rm=new RegExp("["+Jc+"]","g"),Kc="[^"+Jc+"]",om="[^"+Jc.replace("\\.","")+"]",am=/((?:WC+[\/:])*)/.source.replace("WC",Kc),lm=/(WCOD+)?/.source.replace("WCOD",om),cm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),hm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),um=new RegExp("^"+am+lm+cm+hm+"$"),fm=["material","materials","bones","map"],Sc=class{constructor(t,e,i){let s=i||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Fe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rm,"")}static parseTrackName(t){let e=um.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);fm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Sc;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yy=new Float32Array(1);var ih=class ih{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};ih.prototype.isMatrix2=!0;var bc=ih;function jc(n,t,e,i){let s=dm(i);switch(e){case Hc:return n*t;case Xc:return n*t/s.components*s.byteLength;case Oa:return n*t/s.components*s.byteLength;case Ji:return n*t*2/s.components*s.byteLength;case Ba:return n*t*2/s.components*s.byteLength;case Wc:return n*t*3/s.components*s.byteLength;case Un:return n*t*4/s.components*s.byteLength;case za:return n*t*4/s.components*s.byteLength;case Hr:case Wr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Va:case Ha:return Math.max(n,16)*Math.max(t,8)/4;case ka:case Ga:return Math.max(n,8)*Math.max(t,8)/2;case Wa:case Xa:case Ya:case $a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qa:case Yr:case Za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ja:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case el:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case rl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case hl:case ul:case fl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case dl:case pl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case $r:case ml:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dm(n){switch(n){case Pn:case zc:return{byteLength:1,components:1};case $s:case kc:case Zn:return{byteLength:2,components:1};case Ua:case Fa:return{byteLength:2,components:4};case Yn:case Na:case $n:return{byteLength:4,components:1};case Vc:case Gc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ld(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function mm(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<h.length;m++){let x=h[f],v=h[m];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,h[f]=v)}h.length=f+1;for(let m=0,x=h.length;m<x;m++){let v=h[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Im=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,km=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,l0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,p0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ug=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ug=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:gm,alphahash_pars_fragment:xm,alphamap_fragment:_m,alphamap_pars_fragment:ym,alphatest_fragment:vm,alphatest_pars_fragment:Mm,aomap_fragment:Sm,aomap_pars_fragment:bm,batching_pars_vertex:wm,batching_vertex:Em,begin_vertex:Tm,beginnormal_vertex:Am,bsdfs:Cm,iridescence_fragment:Rm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Pm,clipping_planes_pars_fragment:Lm,clipping_planes_pars_vertex:Dm,clipping_planes_vertex:Nm,color_fragment:Um,color_pars_fragment:Fm,color_pars_vertex:Om,color_vertex:Bm,common:zm,cube_uv_reflection_fragment:km,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Gm,displacementmap_vertex:Hm,emissivemap_fragment:Wm,emissivemap_pars_fragment:Xm,colorspace_fragment:qm,colorspace_pars_fragment:Ym,envmap_fragment:$m,envmap_common_pars_fragment:Zm,envmap_pars_fragment:Jm,envmap_pars_vertex:Km,envmap_physical_pars_fragment:l0,envmap_vertex:jm,fog_vertex:Qm,fog_pars_vertex:t0,fog_fragment:e0,fog_pars_fragment:n0,gradientmap_pars_fragment:i0,lightmap_pars_fragment:s0,lights_lambert_fragment:r0,lights_lambert_pars_fragment:o0,lights_pars_begin:a0,lights_toon_fragment:c0,lights_toon_pars_fragment:h0,lights_phong_fragment:u0,lights_phong_pars_fragment:f0,lights_physical_fragment:d0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:g0,lights_fragment_end:x0,lightprobes_pars_fragment:_0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:v0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:S0,map_fragment:b0,map_pars_fragment:w0,map_particle_fragment:E0,map_particle_pars_fragment:T0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:C0,morphinstance_vertex:R0,morphcolor_vertex:I0,morphnormal_vertex:P0,morphtarget_pars_vertex:L0,morphtarget_vertex:D0,normal_fragment_begin:N0,normal_fragment_maps:U0,normal_pars_fragment:F0,normal_pars_vertex:O0,normal_vertex:B0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:H0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:Y0,dithering_fragment:$0,dithering_pars_fragment:Z0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:Q0,shadowmap_vertex:tg,shadowmask_pars_fragment:eg,skinbase_vertex:ng,skinning_pars_vertex:ig,skinning_vertex:sg,skinnormal_vertex:rg,specularmap_fragment:og,specularmap_pars_fragment:ag,tonemapping_fragment:lg,tonemapping_pars_fragment:cg,transmission_fragment:hg,transmission_pars_fragment:ug,uv_pars_fragment:fg,uv_pars_vertex:dg,uv_vertex:pg,worldpos_vertex:mg,background_vert:gg,background_frag:xg,backgroundCube_vert:_g,backgroundCube_frag:yg,cube_vert:vg,cube_frag:Mg,depth_vert:Sg,depth_frag:bg,distance_vert:wg,distance_frag:Eg,equirect_vert:Tg,equirect_frag:Ag,linedashed_vert:Cg,linedashed_frag:Rg,meshbasic_vert:Ig,meshbasic_frag:Pg,meshlambert_vert:Lg,meshlambert_frag:Dg,meshmatcap_vert:Ng,meshmatcap_frag:Ug,meshnormal_vert:Fg,meshnormal_frag:Og,meshphong_vert:Bg,meshphong_frag:zg,meshphysical_vert:kg,meshphysical_frag:Vg,meshtoon_vert:Gg,meshtoon_frag:Hg,points_vert:Wg,points_frag:Xg,shadow_vert:qg,shadow_frag:Yg,sprite_vert:$g,sprite_frag:Zg},Ut={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},di={basic:{uniforms:pn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:pn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:pn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:pn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:pn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new se(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:pn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:pn([Ut.points,Ut.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:pn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:pn([Ut.common,Ut.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:pn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:pn([Ut.sprite,Ut.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:pn([Ut.common,Ut.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:pn([Ut.lights,Ut.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};di.physical={uniforms:pn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var _l={r:0,b:0,g:0},Jg=new Be,cd=new re;cd.set(-1,0,0,0,1,0,0,0,1);function Kg(n,t,e,i,s,r){let o=new se(0),a=s===!0?0:1,l,c,u=null,h=0,f=null;function m(A){let L=A.isScene===!0?A.background:null;if(L&&L.isTexture){let b=A.backgroundBlurriness>0;L=t.get(L,b)}return L}function x(A){let L=!1,b=m(A);b===null?d(o,a):b&&b.isColor&&(d(b,1),L=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(A,L){let b=m(L);b&&(b.isCubeTexture||b.mapping===Vr)?(c===void 0&&(c=new We(new Rn(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:hs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(L.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cd),c.material.toneMapped=pe.getTransfer(b.colorSpace)!==we,(u!==b||h!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new We(new Fr(2,2),new dn({name:"BackgroundMaterial",uniforms:hs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=pe.getTransfer(b.colorSpace)!==we,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function d(A,L){A.getRGB(_l,Zc(n)),e.buffers.color.setClear(_l.r,_l.g,_l.b,L,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,L=1){o.set(A),a=L,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,d(o,a)},render:x,addToRenderList:v,dispose:p}}function jg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(N,H,U,I,B){let Y=!1,Z=h(N,I,U,H);r!==Z&&(r=Z,c(r.object)),Y=m(N,I,U,B),Y&&x(N,I,U,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,b(N,H,U,I),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function h(N,H,U,I){let B=I.wireframe===!0,Y=i[H.id];Y===void 0&&(Y={},i[H.id]=Y);let Z=N.isInstancedMesh===!0?N.id:0,st=Y[Z];st===void 0&&(st={},Y[Z]=st);let O=st[U.id];O===void 0&&(O={},st[U.id]=O);let ot=O[B];return ot===void 0&&(ot=f(l()),O[B]=ot),ot}function f(N){let H=[],U=[],I=[];for(let B=0;B<e;B++)H[B]=0,U[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:U,attributeDivisors:I,object:N,attributes:{},index:null}}function m(N,H,U,I){let B=r.attributes,Y=H.attributes,Z=0,st=U.getAttributes();for(let O in st)if(st[O].location>=0){let nt=B[O],Mt=Y[O];if(Mt===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(Mt=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(Mt=N.instanceColor)),nt===void 0||nt.attribute!==Mt||Mt&&nt.data!==Mt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==I}function x(N,H,U,I){let B={},Y=H.attributes,Z=0,st=U.getAttributes();for(let O in st)if(st[O].location>=0){let nt=Y[O];nt===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor));let Mt={};Mt.attribute=nt,nt&&nt.data&&(Mt.data=nt.data),B[O]=Mt,Z++}r.attributes=B,r.attributesNum=Z,r.index=I}function v(){let N=r.newAttributes;for(let H=0,U=N.length;H<U;H++)N[H]=0}function d(N){p(N,0)}function p(N,H){let U=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;U[N]=1,I[N]===0&&(n.enableVertexAttribArray(N),I[N]=1),B[N]!==H&&(n.vertexAttribDivisor(N,H),B[N]=H)}function A(){let N=r.newAttributes,H=r.enabledAttributes;for(let U=0,I=H.length;U<I;U++)H[U]!==N[U]&&(n.disableVertexAttribArray(U),H[U]=0)}function L(N,H,U,I,B,Y,Z){Z===!0?n.vertexAttribIPointer(N,H,U,B,Y):n.vertexAttribPointer(N,H,U,I,B,Y)}function b(N,H,U,I){v();let B=I.attributes,Y=U.getAttributes(),Z=H.defaultAttributeValues;for(let st in Y){let O=Y[st];if(O.location>=0){let ot=B[st];if(ot===void 0&&(st==="instanceMatrix"&&N.instanceMatrix&&(ot=N.instanceMatrix),st==="instanceColor"&&N.instanceColor&&(ot=N.instanceColor)),ot!==void 0){let nt=ot.normalized,Mt=ot.itemSize,dt=t.get(ot);if(dt===void 0)continue;let yt=dt.buffer,bt=dt.type,xt=dt.bytesPerElement,q=bt===n.INT||bt===n.UNSIGNED_INT||ot.gpuType===Na;if(ot.isInterleavedBufferAttribute){let et=ot.data,pt=et.stride,Lt=ot.offset;if(et.isInstancedInterleavedBuffer){for(let ut=0;ut<O.locationSize;ut++)p(O.location+ut,et.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ut=0;ut<O.locationSize;ut++)d(O.location+ut);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let ut=0;ut<O.locationSize;ut++)L(O.location+ut,Mt/O.locationSize,bt,nt,pt*xt,(Lt+Mt/O.locationSize*ut)*xt,q)}else{if(ot.isInstancedBufferAttribute){for(let et=0;et<O.locationSize;et++)p(O.location+et,ot.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let et=0;et<O.locationSize;et++)d(O.location+et);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let et=0;et<O.locationSize;et++)L(O.location+et,Mt/O.locationSize,bt,nt,Mt*xt,Mt/O.locationSize*et*xt,q)}}else if(Z!==void 0){let nt=Z[st];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(O.location,nt);break;case 3:n.vertexAttrib3fv(O.location,nt);break;case 4:n.vertexAttrib4fv(O.location,nt);break;default:n.vertexAttrib1fv(O.location,nt)}}}}A()}function T(){w();for(let N in i){let H=i[N];for(let U in H){let I=H[U];for(let B in I){let Y=I[B];for(let Z in Y)u(Y[Z].object),delete Y[Z];delete I[B]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let H=i[N.id];for(let U in H){let I=H[U];for(let B in I){let Y=I[B];for(let Z in Y)u(Y[Z].object),delete Y[Z];delete I[B]}}delete i[N.id]}function D(N){for(let H in i){let U=i[H];for(let I in U){let B=U[I];if(B[N.id]===void 0)continue;let Y=B[N.id];for(let Z in Y)u(Y[Z].object),delete Y[Z];delete B[N.id]}}}function M(N){for(let H in i){let U=i[H],I=N.isInstancedMesh===!0?N.id:0,B=U[I];if(B!==void 0){for(let Y in B){let Z=B[Y];for(let st in Z)u(Z[st].object),delete Z[st];delete B[Y]}delete U[I],Object.keys(U).length===0&&delete i[H]}}}function w(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:d,disableUnusedAttributes:A}}function Qg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function tx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Un&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let M=D===Zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Pn&&D!==$n&&!M&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Kt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:A,maxVaryings:L,maxFragmentUniforms:b,maxSamples:T,samples:E}}function ex(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Gn,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){let x=h.clippingPlanes,v=h.clipIntersection,d=h.clipShadows,p=n.get(h);if(!s||x===null||x.length===0||r&&!d)r?u(null):c();else{let A=r?0:i,L=A*4,b=p.clippingState||null;l.value=b,b=u(x,f,L,m);for(let T=0;T!==L;++T)b[T]=e[T];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,x){let v=h!==null?h.length:0,d=null;if(v!==0){if(d=l.value,x!==!0||d===null){let p=m+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(d===null||d.length<p)&&(d=new Float32Array(p));for(let L=0,b=m;L!==v;++L,b+=4)o.copy(h[L]).applyMatrix4(A,a),o.normal.toArray(d,b),d[b+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}var Ks=4,nx=6,ix=20,sx=256,Zr=new zr,Vf=new se,sh=null,rh=0,oh=0,ah=!1,rx=new $,us=new $,vl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=rx}=r;sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sh,rh,oh),this._renderer.xr.enabled=ah,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Zn,format:Un,colorSpace:vr,depthBuffer:!1},s=Gf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ox(r)),this._blurMaterial=lx(r,t,e),this._ggxMaterial=ax(r,t,e)}return s}_compileMaterial(t){let e=new We(new Qe,t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,i,s,r){let l=new fn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(Vf),h.toneMapping=qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new Rn,new Xn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,d=v.material,p=!1,A=t.background;A?A.isColor&&(d.color.copy(A),t.background=null,p=!0):(d.color.copy(Vf),p=!0);for(let L=0;L<6;L++){let b=L%3;b===0?(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[L],r.y,r.z)):b===1?(l.up.set(0,0,c[L]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[L],r.z)):(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[L]));let T=this._cubeSize;Js(s,b*T,L>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(v,l),h.render(t,l)}h.toneMapping=m,h.autoClear=f,t.background=A}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Yi||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Js(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Zr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,m=h*f,{_lodMax:x}=this,v=this._sizeLods[i],d=3*v*(i>x-Ks?i-x+Ks:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=x-e,Js(r,d,p,3*v,2*v),s.setRenderTarget(r),s.render(a,Zr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,Js(t,d,p,3*v,2*v),s.setRenderTarget(t),s.render(a,Zr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Ks?s-this._lodMax+Ks:0),f=4*(this._cubeSize-u);Js(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,Zr)}};function ox(n){let t=[],e=[],i=n,s=n-Ks+1+nx;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,m=3,x=new Float32Array(m*f*h),v=new Float32Array(m*f*h);for(let p=0;p<h;p++){let A=p%3*2/3-1,L=p>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];x.set(b,m*f*p);for(let T=0;T<f;T++){let E=u[T*2]*2-1,D=u[T*2+1]*2-1;p===0?us.set(1,D,E):p===1?us.set(-E,1,-D):p===2?us.set(-E,D,1):p===3?us.set(-1,D,-E):p===4?us.set(-E,-1,D):us.set(E,D,-1),us.toArray(v,(p*f+T)*m)}}let d=new Qe;d.setAttribute("position",new He(x,m)),d.setAttribute("outputDirection",new He(v,m)),e.push(new We(d,null)),i>Ks&&i--}return{lodMeshes:e,sizeLods:t}}function Gf(n,t,e){let i=new Sn(n,t,e);return i.texture.mapping=Vr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ax(n,t,e){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function lx(n,t,e){return new dn({name:"SphericalGaussianBlur",defines:{SAMPLES:ix,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Hf(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Wf(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ml=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Dr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rn(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:ui});r.uniforms.tEquirect.value=e;let o=new We(s,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=$e),new Ca(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function cx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,m=!1){return f==null?null:m?o(f):r(f)}function r(f){if(f&&f.isTexture){let m=f.mapping;if(m===Pa||m===La)if(t.has(f)){let x=t.get(f).texture;return a(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let v=new Ml(x.height);return v.fromEquirectangularTexture(n,f),t.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let m=f.mapping,x=m===Pa||m===La,v=m===Yi||m===cs;if(x||v){let d=e.get(f),p=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new vl(n)),d=x?i.fromEquirectangular(f,d):i.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,e.set(f,d),d.texture;if(d!==void 0)return d.texture;{let A=f.image;return x&&A&&A.height>0||v&&A&&l(A)?(i===null&&(i=new vl(n)),d=x?i.fromEquirectangular(f):i.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,e.set(f,d),f.addEventListener("dispose",u),d.texture):null}}}return f}function a(f,m){return m===Pa?f.mapping=Yi:m===La&&(f.mapping=cs),f}function l(f){let m=0,x=6;for(let v=0;v<x;v++)f[v]!==void 0&&m++;return m===x}function c(f){let m=f.target;m.removeEventListener("dispose",c);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function u(f){let m=f.target;m.removeEventListener("dispose",u);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function hx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ss("WebGLRenderer: "+i+" extension not supported."),s}}}function ux(n,t,e,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let m in f)t.update(f[m],n.ARRAY_BUFFER)}function c(h){let f=[],m=h.index,x=h.attributes.position,v=0;if(x===void 0)return;if(m!==null){let A=m.array;v=m.version;for(let L=0,b=A.length;L<b;L+=3){let T=A[L+0],E=A[L+1],D=A[L+2];f.push(T,E,E,D,D,T)}}else{let A=x.array;v=x.version;for(let L=0,b=A.length/3-1;L<b;L+=3){let T=L+0,E=L+1,D=L+2;f.push(T,E,E,D,D,T)}}let d=new(x.count>=65535?Rr:Cr)(f,1);d.version=v;let p=r.get(h);p&&t.remove(p),r.set(h,d)}function u(h){let f=r.get(h);if(f){let m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function fx(n,t,e){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),e.update(f,i,1)}function c(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,h*o,m),e.update(f,i,m))}function u(h,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,m);let v=0;for(let d=0;d<m;d++)v+=f[d];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function dx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function px(n,t,e){let i=new WeakMap,s=new Ve;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let w=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],L=0;m===!0&&(L=1),x===!0&&(L=2),v===!0&&(L=3);let b=a.attributes.position.count*L,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*T*4*h),D=new Er(E,b,T,h);D.type=$n,D.needsUpdate=!0;let M=L*4;for(let C=0;C<h;C++){let N=d[C],H=p[C],U=A[C],I=b*T*4*C;for(let B=0;B<N.count;B++){let Y=B*M;m===!0&&(s.fromBufferAttribute(N,B),E[I+Y+0]=s.x,E[I+Y+1]=s.y,E[I+Y+2]=s.z,E[I+Y+3]=0),x===!0&&(s.fromBufferAttribute(H,B),E[I+Y+4]=s.x,E[I+Y+5]=s.y,E[I+Y+6]=s.z,E[I+Y+7]=0),v===!0&&(s.fromBufferAttribute(U,B),E[I+Y+8]=s.x,E[I+Y+9]=s.y,E[I+Y+10]=s.z,E[I+Y+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:D,size:new he(b,T)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function mx(n,t,e,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var gx={[Pc]:"LINEAR_TONE_MAPPING",[Lc]:"REINHARD_TONE_MAPPING",[Dc]:"CINEON_TONE_MAPPING",[Nc]:"ACES_FILMIC_TONE_MAPPING",[Fc]:"AGX_TONE_MAPPING",[Oc]:"NEUTRAL_TONE_MAPPING",[Uc]:"CUSTOM_TONE_MAPPING"};function xx(n,t,e,i,s,r){let o=new Sn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Qe;c.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new xn([0,2,0,0,2,0],2));let u=new ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new We(c,u),f=new zr(-1,1,1,-1,0,1),m=null,x=null,v=!1,d,p=null,A=[],L=!1;this.setSize=function(b,T){o.setSize(b,T),a!==null&&a.setSize(b,T),l!==null&&l.setSize(b,T);for(let E=0;E<A.length;E++){let D=A[E];D.setSize&&D.setSize(b,T)}},this.setEffects=function(b){A=b,L=A.length>0&&A[0].isRenderPass===!0;let T=o.width,E=o.height;A.length>0&&a===null&&(a=new Sn(T,E,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(T,E,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<A.length;D++){let M=A[D];M.setSize&&M.setSize(T,E)}},this.begin=function(b,T){if(v||b.toneMapping===qn&&A.length===0)return!1;if(p=T,T!==null){let E=T.width,D=T.height;(o.width!==E||o.height!==D)&&this.setSize(E,D)}return L===!1&&b.setRenderTarget(o),d=b.toneMapping,b.toneMapping=qn,!0},this.hasRenderPass=function(){return L},this.end=function(b,T){b.toneMapping=d,v=!0;let E=o,D=a;for(let M=0;M<A.length;M++){let w=A[M];w.enabled!==!1&&(w.render(b,D,E,T),w.needsSwap!==!1&&(E=D,D=D===a?l:a))}if(m!==b.outputColorSpace||x!==b.toneMapping){m=b.outputColorSpace,x=b.toneMapping,u.defines={},pe.getTransfer(m)===we&&(u.defines.SRGB_TRANSFER="");let M=gx[x];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(p),b.render(h,f),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var hd=new an,hh=new Gi(1,1),ud=new Er,fd=new la,dd=new Dr,Xf=[],qf=[],Yf=new Float32Array(16),$f=new Float32Array(9),Zf=new Float32Array(4);function Qs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Xf[s];if(r===void 0&&(r=new Float32Array(s),Xf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function tn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function en(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wl(n,t){let e=qf[t];e===void 0&&(e=new Int32Array(t),qf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _x(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2fv(this.addr,t),en(e,t)}}function vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;n.uniform3fv(this.addr,t),en(e,t)}}function Mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4fv(this.addr,t),en(e,t)}}function Sx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Zf.set(i),n.uniformMatrix2fv(this.addr,!1,Zf),en(e,i)}}function bx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;$f.set(i),n.uniformMatrix3fv(this.addr,!1,$f),en(e,i)}}function wx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,i))return;Yf.set(i),n.uniformMatrix4fv(this.addr,!1,Yf),en(e,i)}}function Ex(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2iv(this.addr,t),en(e,t)}}function Ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3iv(this.addr,t),en(e,t)}}function Cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4iv(this.addr,t),en(e,t)}}function Rx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ix(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;n.uniform2uiv(this.addr,t),en(e,t)}}function Px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;n.uniform3uiv(this.addr,t),en(e,t)}}function Lx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;n.uniform4uiv(this.addr,t),en(e,t)}}function Dx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(hh.compareFunction=e.isReversedDepthBuffer()?xl:gl,r=hh):r=hd,e.setTexture2D(t||r,s)}function Nx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||fd,s)}function Ux(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||dd,s)}function Fx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ud,s)}function Ox(n){switch(n){case 5126:return _x;case 35664:return yx;case 35665:return vx;case 35666:return Mx;case 35674:return Sx;case 35675:return bx;case 35676:return wx;case 5124:case 35670:return Ex;case 35667:case 35671:return Tx;case 35668:case 35672:return Ax;case 35669:case 35673:return Cx;case 5125:return Rx;case 36294:return Ix;case 36295:return Px;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Fx}}function Bx(n,t){n.uniform1fv(this.addr,t)}function zx(n,t){let e=Qs(t,this.size,2);n.uniform2fv(this.addr,e)}function kx(n,t){let e=Qs(t,this.size,3);n.uniform3fv(this.addr,e)}function Vx(n,t){let e=Qs(t,this.size,4);n.uniform4fv(this.addr,e)}function Gx(n,t){let e=Qs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Hx(n,t){let e=Qs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Wx(n,t){let e=Qs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Xx(n,t){n.uniform1iv(this.addr,t)}function qx(n,t){n.uniform2iv(this.addr,t)}function Yx(n,t){n.uniform3iv(this.addr,t)}function $x(n,t){n.uniform4iv(this.addr,t)}function Zx(n,t){n.uniform1uiv(this.addr,t)}function Jx(n,t){n.uniform2uiv(this.addr,t)}function Kx(n,t){n.uniform3uiv(this.addr,t)}function jx(n,t){n.uniform4uiv(this.addr,t)}function Qx(n,t,e){let i=this.cache,s=t.length,r=wl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=hh:o=hd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function t_(n,t,e){let i=this.cache,s=t.length,r=wl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||fd,r[o])}function e_(n,t,e){let i=this.cache,s=t.length,r=wl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||dd,r[o])}function n_(n,t,e){let i=this.cache,s=t.length,r=wl(e,s);tn(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ud,r[o])}function i_(n){switch(n){case 5126:return Bx;case 35664:return zx;case 35665:return kx;case 35666:return Vx;case 35674:return Gx;case 35675:return Hx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return qx;case 35668:case 35672:return Yx;case 35669:case 35673:return $x;case 5125:return Zx;case 36294:return Jx;case 36295:return Kx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return n_}}var uh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ox(e.type)}},fh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=i_(e.type)}},dh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},lh=/(\w+)(\])?(\[|\.)?/g;function Jf(n,t){n.seq.push(t),n.map[t.id]=t}function s_(n,t,e){let i=n.name,s=i.length;for(lh.lastIndex=0;;){let r=lh.exec(i),o=lh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jf(e,c===void 0?new uh(a,n,t):new fh(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new dh(a),Jf(e,h)),e=h}}}var js=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);s_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Kf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var r_=37297,o_=0;function a_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var jf=new re;function l_(n){pe._getMatrix(jf,pe.workingColorSpace,n);let t=`mat3( ${jf.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(n)){case Mr:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Qf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+a_(n.getShaderSource(t),a)}else return r}function c_(n,t){let e=l_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var h_={[Pc]:"Linear",[Lc]:"Reinhard",[Dc]:"Cineon",[Nc]:"ACESFilmic",[Fc]:"AgX",[Oc]:"Neutral",[Uc]:"Custom"};function u_(n,t){let e=h_[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yl=new $;function f_(){pe.getLuminanceCoefficients(yl);let n=yl.x.toFixed(4),t=yl.y.toFixed(4),e=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function p_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function m_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Kr(n){return n!==""}function td(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ed(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(n){return n.replace(g_,__)}var x_=new Map;function __(n,t){let e=ce[t];if(e===void 0){let i=x_.get(t);if(i!==void 0)e=ce[i],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ph(e)}var y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(n){return n.replace(y_,v_)}function v_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var M_={[kr]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function S_(n){return M_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var b_={[Yi]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE_UV"};function w_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":b_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var E_={[cs]:"ENVMAP_MODE_REFRACTION"};function T_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":E_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A_={[Ic]:"ENVMAP_BLENDING_MULTIPLY",[vf]:"ENVMAP_BLENDING_MIX",[Mf]:"ENVMAP_BLENDING_ADD"};function C_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":A_[n.combine]||"ENVMAP_BLENDING_NONE"}function R_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function I_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=S_(e),c=w_(e),u=T_(e),h=C_(e),f=R_(e),m=d_(e),x=p_(r),v=s.createProgram(),d,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Kr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(d=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[id(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?ce.tonemapping_pars_fragment:"",e.toneMapping!==qn?u_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,c_("linearToOutputTexel",e.outputColorSpace),f_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),o=ph(o),o=td(o,e),o=ed(o,e),a=ph(a),a=td(a,e),a=ed(a,e),o=nd(o),a=nd(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let L=A+d+o,b=A+p+a,T=Kf(s,s.VERTEX_SHADER,L),E=Kf(s,s.FRAGMENT_SHADER,b);s.attachShader(v,T),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function D(N){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(v)||"",U=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(E)||"",B=H.trim(),Y=U.trim(),Z=I.trim(),st=!0,O=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,T,E);else{let ot=Qf(s,T,"vertex"),nt=Qf(s,E,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+ot+`
`+nt)}else B!==""?Kt("WebGLProgram: Program Info Log:",B):(Y===""||Z==="")&&(O=!1);O&&(N.diagnostics={runnable:st,programLog:B,vertexShader:{log:Y,prefix:d},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(T),s.deleteShader(E),M=new js(s,v),w=m_(s,v)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,r_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}var P_=0,mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new gh(t),e.set(t,i)),i}},gh=class{constructor(t){this.id=P_++,this.code=t,this.usedTimes=0}};function L_(n){return n===Ji||n===Yr||n===$r}function D_(n,t,e,i,s,r){let o=new Tr,a=new mh,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,w,C,N,H,U){let I=N.fog,B=H.geometry,Y=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,Z=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,st=t.get(M.envMap||Y,Z),O=st&&st.mapping===Vr?st.image.height:null,ot=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&Kt("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let nt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Mt=nt!==void 0?nt.length:0,dt=0;B.morphAttributes.position!==void 0&&(dt=1),B.morphAttributes.normal!==void 0&&(dt=2),B.morphAttributes.color!==void 0&&(dt=3);let yt,bt,xt,q;if(ot){let Te=di[ot];yt=Te.vertexShader,bt=Te.fragmentShader}else{yt=M.vertexShader,bt=M.fragmentShader;let Te=a.getVertexShaderStage(M),ve=a.getFragmentShaderStage(M);a.update(M,Te,ve),xt=Te.id,q=ve.id}let et=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Lt=H.isInstancedMesh===!0,ut=H.isBatchedMesh===!0,Ft=!!M.map,Jt=!!M.matcap,Gt=!!st,$t=!!M.aoMap,oe=!!M.lightMap,Wt=!!M.bumpMap&&M.wireframe===!1,jt=!!M.normalMap,ye=!!M.displacementMap,Ge=!!M.emissiveMap,Me=!!M.metalnessMap,Ee=!!M.roughnessMap,V=M.anisotropy>0,Ne=M.clearcoat>0,me=M.dispersion>0,R=M.retroreflectivity>0,y=M.iridescence>0,X=M.sheen>0,j=M.transmission>0,lt=V&&!!M.anisotropyMap,St=Ne&&!!M.clearcoatMap,wt=Ne&&!!M.clearcoatNormalMap,ct=Ne&&!!M.clearcoatRoughnessMap,ht=y&&!!M.iridescenceMap,Tt=y&&!!M.iridescenceThicknessMap,Yt=X&&!!M.sheenColorMap,It=X&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,Xt=!!M.specularColorMap,Zt=!!M.specularIntensityMap,ie=j&&!!M.transmissionMap,z=j&&!!M.thicknessMap,at=!!M.gradientMap,tt=!!M.alphaMap,At=M.alphaTest>0,Rt=!!M.alphaHash,ft=!!M.extensions,Ht=qn;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ht=n.toneMapping);let Vt={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:yt,fragmentShader:bt,defines:M.defines,customVertexShaderID:xt,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ut,batchingColor:ut&&H._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&H.instanceColor!==null,instancingMorph:Lt&&H.morphTexture!==null,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ft,matcap:Jt,envMap:Gt,envMapMode:Gt&&st.mapping,envMapCubeUVHeight:O,aoMap:$t,lightMap:oe,bumpMap:Wt,normalMap:jt,displacementMap:ye,emissiveMap:Ge,normalMapObjectSpace:jt&&M.normalMapType===wf,normalMapTangentSpace:jt&&M.normalMapType===qc,packedNormalMap:jt&&M.normalMapType===qc&&L_(M.normalMap.format),metalnessMap:Me,roughnessMap:Ee,anisotropy:V,anisotropyMap:lt,clearcoat:Ne,clearcoatMap:St,clearcoatNormalMap:wt,clearcoatRoughnessMap:ct,dispersion:me,retroreflection:R,iridescence:y,iridescenceMap:ht,iridescenceThicknessMap:Tt,sheen:X,sheenColorMap:Yt,sheenRoughnessMap:It,specularMap:Ct,specularColorMap:Xt,specularIntensityMap:Zt,transmission:j,transmissionMap:ie,thicknessMap:z,gradientMap:at,opaque:M.transparent===!1&&M.blending===Ys&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:At,alphaHash:Rt,combine:M.combine,mapUv:Ft&&x(M.map.channel),aoMapUv:$t&&x(M.aoMap.channel),lightMapUv:oe&&x(M.lightMap.channel),bumpMapUv:Wt&&x(M.bumpMap.channel),normalMapUv:jt&&x(M.normalMap.channel),displacementMapUv:ye&&x(M.displacementMap.channel),emissiveMapUv:Ge&&x(M.emissiveMap.channel),metalnessMapUv:Me&&x(M.metalnessMap.channel),roughnessMapUv:Ee&&x(M.roughnessMap.channel),anisotropyMapUv:lt&&x(M.anisotropyMap.channel),clearcoatMapUv:St&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(M.sheenRoughnessMap.channel),specularMapUv:Ct&&x(M.specularMap.channel),specularColorMapUv:Xt&&x(M.specularColorMap.channel),specularIntensityMapUv:Zt&&x(M.specularIntensityMap.channel),transmissionMapUv:ie&&x(M.transmissionMap.channel),thicknessMapUv:z&&x(M.thicknessMap.channel),alphaMapUv:tt&&x(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(jt||V),vertexNormals:!!B.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!B.attributes.uv&&(Ft||tt),fog:!!I,useFog:M.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||B.attributes.normal===void 0&&jt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:dt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Ft&&M.map.isVideoTexture===!0&&pe.getTransfer(M.map.colorSpace)===we,decodeVideoTextureEmissive:Ge&&M.emissiveMap.isVideoTexture===!0&&pe.getTransfer(M.emissiveMap.colorSpace)===we,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Nn,flipSided:M.side===yn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ft&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&M.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function d(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)w.push(C),w.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(p(w,M),A(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function p(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numSunLights),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numSunLightShadows),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function A(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function L(M){let w=m[M.type],C;if(w){let N=di[w];C=Bf.clone(N.uniforms)}else C=M.uniforms;return C}function b(M,w){let C=u.get(w);return C!==void 0?++C.usedTimes:(C=new I_(n,w,M,s),c.push(C),u.set(w,C)),C}function T(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function E(M){a.remove(M)}function D(){a.dispose()}return{getParameters:v,getProgramCacheKey:d,getUniforms:L,acquireProgram:b,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:D}}function N_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function U_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function sd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function rd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function a(f,m,x,v,d,p){let A=n[t];return A===void 0?(A={id:f.id,object:f,geometry:m,material:x,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:d,group:p},n[t]=A):(A.id=f.id,A.object=f,A.geometry=m,A.material=x,A.materialVariant=o(f),A.groupOrder=v,A.renderOrder=f.renderOrder,A.z=d,A.group=p),t++,A}function l(f,m,x,v,d,p,A){A.reversedDepth===!0&&(d=-d);let L=a(f,m,x,v,d,p);x.transmission>0?i.push(L):x.transparent===!0?s.push(L):e.push(L)}function c(f,m,x,v,d,p){let A=a(f,m,x,v,d,p);x.transmission>0?i.unshift(A):x.transparent===!0?s.unshift(A):e.unshift(A)}function u(f,m){e.length>1&&e.sort(f||U_),i.length>1&&i.sort(m||sd),s.length>1&&s.sort(m||sd)}function h(){for(let f=t,m=n.length;f<m;f++){let x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function F_(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new rd,n.set(i,[o])):s>=r.length?(o=new rd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function O_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new se};break;case"SpotLight":e={position:new $,direction:new $,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new $,halfWidth:new $,halfHeight:new $};break}return n[t.id]=e,e}}}function B_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var z_=0;function k_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function V_(n){let t=new O_,e=B_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);let s=new $,r=new Be,o=new Be;function a(c){let u=0,h=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,x=0,v=0,d=0,p=0,A=0,L=0,b=0,T=0,E=0,D=0,M=0,w=0,C=0;c.sort(k_);for(let H=0,U=c.length;H<U;H++){let I=c[H],B=I.color,Y=I.intensity,Z=I.distance,st=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ji?st=I.shadow.map.texture:st=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*Y,h+=B.g*Y,f+=B.b*Y;else if(I.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(I.sh.coefficients[O],Y);C++}else if(I.isSunLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ot=I.shadow,nt=e.get(I);nt.shadowIntensity=ot.intensity,nt.shadowBias=ot.bias,nt.shadowNormalBias=ot.normalBias,nt.shadowRadius=ot.radius,nt.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),i.sunShadow[x]=nt,i.sunShadowMap[x]=st;let Mt=ot.getViewportCount();for(let dt=0;dt<Mt;dt++)i.sunShadowMatrix[v+dt]=ot.getMatrix(dt),i.sunShadowCascade[v+dt]=ot._cascadeData[dt];v+=Mt,x++}i.sun[m]=O,m++}else if(I.isDirectionalLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ot=I.shadow,nt=e.get(I);nt.shadowIntensity=ot.intensity,nt.shadowBias=ot.bias,nt.shadowNormalBias=ot.normalBias,nt.shadowRadius=ot.radius,nt.shadowMapSize=ot.mapSize,i.directionalShadow[d]=nt,i.directionalShadowMap[d]=st,i.directionalShadowMatrix[d]=I.shadow.matrix,T++}i.directional[d]=O,d++}else if(I.isSpotLight){let O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(B).multiplyScalar(Y),O.distance=Z,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,i.spot[A]=O;let ot=I.shadow;if(I.map&&(i.spotLightMap[M]=I.map,M++,ot.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[A]=ot.matrix,I.castShadow){let nt=e.get(I);nt.shadowIntensity=ot.intensity,nt.shadowBias=ot.bias,nt.shadowNormalBias=ot.normalBias,nt.shadowRadius=ot.radius,nt.shadowMapSize=ot.mapSize,i.spotShadow[A]=nt,i.spotShadowMap[A]=st,D++}A++}else if(I.isRectAreaLight){let O=t.get(I);O.color.copy(B).multiplyScalar(Y),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),i.rectArea[L]=O,L++}else if(I.isPointLight){let O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){let ot=I.shadow,nt=e.get(I);nt.shadowIntensity=ot.intensity,nt.shadowBias=ot.bias,nt.shadowNormalBias=ot.normalBias,nt.shadowRadius=ot.radius,nt.shadowMapSize=ot.mapSize,nt.shadowCameraNear=ot.camera.near,nt.shadowCameraFar=ot.camera.far,i.pointShadow[p]=nt,i.pointShadowMap[p]=st,i.pointShadowMatrix[p]=I.shadow.matrix,E++}i.point[p]=O,p++}else if(I.isHemisphereLight){let O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(Y),O.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[b]=O,b++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ut.LTC_FLOAT_1,i.rectAreaLTC2=Ut.LTC_FLOAT_2):(i.rectAreaLTC1=Ut.LTC_HALF_1,i.rectAreaLTC2=Ut.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let N=i.hash;(N.sunLength!==m||N.directionalLength!==d||N.pointLength!==p||N.spotLength!==A||N.rectAreaLength!==L||N.hemiLength!==b||N.numSunShadows!==x||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==D||N.numSpotMaps!==M||N.numLightProbes!==C)&&(i.sun.length=m,i.directional.length=d,i.spot.length=A,i.rectArea.length=L,i.point.length=p,i.hemi.length=b,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+M-w,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,N.sunLength=m,N.directionalLength=d,N.pointLength=p,N.spotLength=A,N.rectAreaLength=L,N.hemiLength=b,N.numSunShadows=x,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=D,N.numSpotMaps=M,N.numLightProbes=C,i.version=z_++)}function l(c,u){let h=0,f=0,m=0,x=0,v=0,d=0,p=u.matrixWorldInverse;for(let A=0,L=c.length;A<L;A++){let b=c[A];if(b.isSunLight){let T=i.sun[h];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),h++}else if(b.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),f++}else if(b.isSpotLight){let T=i.spot[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),x++}else if(b.isRectAreaLight){let T=i.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let T=i.point[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),m++}else if(b.isHemisphereLight){let T=i.hemi[d];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),d++}}}return{setup:a,setupView:l,state:i}}function od(n){let t=new V_(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function G_(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new od(n),t.set(s,[a])):r>=o.length?(a=new od(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,X_=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],q_=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],ad=new Be,Jr=new $,ch=new $;function Y_(n,t,e){let i=new Pr,s=new he,r=new he,o=new Ve,a=new ga,l=new xa,c={},u=e.maxTextureSize,h={[qi]:yn,[yn]:qi,[Nn]:Nn},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:H_,fragmentShader:W_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let x=new Qe;x.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new We(x,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kr;let p=this.type;this.render=function(E,D,M){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;this.type===tf&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kr);let w=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ui),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let U=p!==this.type;U&&D.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=E.length;I<B;I++){let Y=E[I],Z=Y.shadow;if(Z===void 0){Kt("WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let st=Z.getFrameExtents();s.multiply(st),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,Z.mapSize.y=r.y));let O=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=O,Z.map===null||U===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===qs){if(Y.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Sn(s.x,s.y,{format:Ji,type:Zn,minFilter:$e,magFilter:$e,generateMipmaps:!1}),Z.map.texture.name=Y.name+".shadowMap",Z.map.depthTexture=new Gi(s.x,s.y,$n),Z.map.depthTexture.name=Y.name+".shadowMapDepth",Z.map.depthTexture.format=oi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=on,Z.map.depthTexture.magFilter=on}else Y.isPointLight?(Z.map=new Ml(s.x),Z.map.depthTexture=new pa(s.x,Yn)):(Z.map=new Sn(s.x,s.y),Z.map.depthTexture=new Gi(s.x,s.y,Yn)),Z.map.depthTexture.name=Y.name+".shadowMap",Z.map.depthTexture.format=oi,this.type===kr?(Z.map.depthTexture.compareFunction=O?xl:gl,Z.map.depthTexture.minFilter=$e,Z.map.depthTexture.magFilter=$e):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=on,Z.map.depthTexture.magFilter=on);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let ot=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();Y.isPointLight!==!0&&Z.updateMatrices(Y,M);for(let nt=0;nt<ot;nt++){let Mt=Z.getCamera(nt);if(Y.isPointLight){let dt=Z.camera,yt=Z.matrix,bt=Y.distance||dt.far;bt!==dt.far&&(dt.far=bt,dt.updateProjectionMatrix()),Jr.setFromMatrixPosition(Y.matrixWorld),dt.position.copy(Jr),ch.copy(dt.position),ch.add(X_[nt]),dt.up.copy(q_[nt]),dt.lookAt(ch),dt.updateMatrixWorld(),yt.makeTranslation(-Jr.x,-Jr.y,-Jr.z),ad.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(ad,dt.coordinateSystem,dt.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,nt),n.clear();else{nt===0&&(n.setRenderTarget(Z.map),n.clear());let dt=Z.getViewport(nt);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),H.viewport(o)}i=Z.getFrustum(nt),b(D,M,Mt,Y,this.type)}Z.isPointLightShadow!==!0&&this.type===qs&&A(Z,M),Z.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(w,C,N)};function A(E,D){let M=t.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new Sn(s.x,s.y,{format:Ji,type:Zn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(D,null,M,f,v,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(D,null,M,m,v,null)}function L(E,D,M,w){let C=null,N=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=M.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let H=C.uuid,U=D.uuid,I=c[H];I===void 0&&(I={},c[H]=I);let B=I[U];B===void 0&&(B=C.clone(),I[U]=B,D.addEventListener("dispose",T)),C=B}if(C.visible=D.visible,C.wireframe=D.wireframe,w===qs?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:h[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let H=n.properties.get(C);H.light=M}return C}function b(E,D,M,w,C){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===qs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let U=t.update(E),I=E.material;if(Array.isArray(I)){let B=U.groups;for(let Y=0,Z=B.length;Y<Z;Y++){let st=B[Y],O=I[st.materialIndex];if(O&&O.visible){let ot=L(E,O,w,C);E.onBeforeShadow(n,E,D,M,U,ot,st),n.renderBufferDirect(M,null,U,ot,E,st),E.onAfterShadow(n,E,D,M,U,ot,st)}}}else if(I.visible){let B=L(E,I,w,C);E.onBeforeShadow(n,E,D,M,U,B,null),n.renderBufferDirect(M,null,U,B,E,null),E.onAfterShadow(n,E,D,M,U,B,null)}}let H=E.children;for(let U=0,I=H.length;U<I;U++)b(H[U],D,M,w,C)}function T(E){E.target.removeEventListener("dispose",T);for(let M in c){let w=c[M],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function $_(n,t){function e(){let z=!1,at=new Ve,tt=null,At=new Ve(0,0,0,0);return{setMask:function(Rt){tt!==Rt&&!z&&(n.colorMask(Rt,Rt,Rt,Rt),tt=Rt)},setLocked:function(Rt){z=Rt},setClear:function(Rt,ft,Ht,Vt,Te){Te===!0&&(Rt*=Vt,ft*=Vt,Ht*=Vt),at.set(Rt,ft,Ht,Vt),At.equals(at)===!1&&(n.clearColor(Rt,ft,Ht,Vt),At.copy(at))},reset:function(){z=!1,tt=null,At.set(-1,0,0,0)}}}function i(){let z=!1,at=!1,tt=null,At=null,Rt=null;return{setReversed:function(ft){if(at!==ft){let Ht=t.get("EXT_clip_control");ft?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),at=ft;let Vt=Rt;Rt=null,this.setClear(Vt)}},getReversed:function(){return at},setTest:function(ft){ft?et(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(ft){tt!==ft&&!z&&(n.depthMask(ft),tt=ft)},setFunc:function(ft){if(at&&(ft=Uf[ft]),At!==ft){switch(ft){case Zo:n.depthFunc(n.NEVER);break;case Jo:n.depthFunc(n.ALWAYS);break;case Ko:n.depthFunc(n.LESS);break;case ks:n.depthFunc(n.LEQUAL);break;case jo:n.depthFunc(n.EQUAL);break;case Qo:n.depthFunc(n.GEQUAL);break;case ta:n.depthFunc(n.GREATER);break;case ea:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}At=ft}},setLocked:function(ft){z=ft},setClear:function(ft){Rt!==ft&&(Rt=ft,at&&(ft=1-ft),n.clearDepth(ft))},reset:function(){z=!1,tt=null,At=null,Rt=null,at=!1}}}function s(){let z=!1,at=null,tt=null,At=null,Rt=null,ft=null,Ht=null,Vt=null,Te=null;return{setTest:function(ve){z||(ve?et(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(ve){at!==ve&&!z&&(n.stencilMask(ve),at=ve)},setFunc:function(ve,ge,En){(tt!==ve||At!==ge||Rt!==En)&&(n.stencilFunc(ve,ge,En),tt=ve,At=ge,Rt=En)},setOp:function(ve,ge,En){(ft!==ve||Ht!==ge||Vt!==En)&&(n.stencilOp(ve,ge,En),ft=ve,Ht=ge,Vt=En)},setLocked:function(ve){z=ve},setClear:function(ve){Te!==ve&&(n.clearStencil(ve),Te=ve)},reset:function(){z=!1,at=null,tt=null,At=null,Rt=null,ft=null,Ht=null,Vt=null,Te=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f={},m=new WeakMap,x=[],v=null,d=!1,p=null,A=null,L=null,b=null,T=null,E=null,D=null,M=new se(0,0,0),w=0,C=!1,N=null,H=null,U=null,I=null,B=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,st=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(O)[1]),Z=st>=1):O.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),Z=st>=2);let ot=null,nt={},Mt=n.getParameter(n.SCISSOR_BOX),dt=n.getParameter(n.VIEWPORT),yt=new Ve().fromArray(Mt),bt=new Ve().fromArray(dt);function xt(z,at,tt,At){let Rt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(z,ft),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<tt;Ht++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(at+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return ft}let q={};q[n.TEXTURE_2D]=xt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=xt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=xt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=xt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(n.DEPTH_TEST),o.setFunc(ks),Wt(!1),jt(wc),et(n.CULL_FACE),$t(ui);function et(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function pt(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function Lt(z,at){return f[z]!==at?(n.bindFramebuffer(z,at),f[z]=at,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=at),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=at),!0):!1}function ut(z,at){let tt=x,At=!1;if(z){tt=m.get(at),tt===void 0&&(tt=[],m.set(at,tt));let Rt=z.textures;if(tt.length!==Rt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Ht=Rt.length;ft<Ht;ft++)tt[ft]=n.COLOR_ATTACHMENT0+ft;tt.length=Rt.length,At=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,At=!0);At&&n.drawBuffers(tt)}function Ft(z){return v!==z?(n.useProgram(z),v=z,!0):!1}let Jt={[ls]:n.FUNC_ADD,[nf]:n.FUNC_SUBTRACT,[sf]:n.FUNC_REVERSE_SUBTRACT};Jt[rf]=n.MIN,Jt[of]=n.MAX;let Gt={[af]:n.ZERO,[lf]:n.ONE,[cf]:n.SRC_COLOR,[Cc]:n.SRC_ALPHA,[mf]:n.SRC_ALPHA_SATURATE,[df]:n.DST_COLOR,[uf]:n.DST_ALPHA,[hf]:n.ONE_MINUS_SRC_COLOR,[Rc]:n.ONE_MINUS_SRC_ALPHA,[pf]:n.ONE_MINUS_DST_COLOR,[ff]:n.ONE_MINUS_DST_ALPHA,[gf]:n.CONSTANT_COLOR,[xf]:n.ONE_MINUS_CONSTANT_COLOR,[_f]:n.CONSTANT_ALPHA,[yf]:n.ONE_MINUS_CONSTANT_ALPHA};function $t(z,at,tt,At,Rt,ft,Ht,Vt,Te,ve){if(z===ui){d===!0&&(pt(n.BLEND),d=!1);return}if(d===!1&&(et(n.BLEND),d=!0),z!==ef){if(z!==p||ve!==C){if((A!==ls||T!==ls)&&(n.blendEquation(n.FUNC_ADD),A=ls,T=ls),ve)switch(z){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ec:n.blendFunc(n.ONE,n.ONE);break;case Tc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ac:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ee("WebGLState: Invalid blending: ",z);break}else switch(z){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ec:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tc:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",z);break}L=null,b=null,E=null,D=null,M.set(0,0,0),w=0,p=z,C=ve}return}Rt=Rt||at,ft=ft||tt,Ht=Ht||At,(at!==A||Rt!==T)&&(n.blendEquationSeparate(Jt[at],Jt[Rt]),A=at,T=Rt),(tt!==L||At!==b||ft!==E||Ht!==D)&&(n.blendFuncSeparate(Gt[tt],Gt[At],Gt[ft],Gt[Ht]),L=tt,b=At,E=ft,D=Ht),(Vt.equals(M)===!1||Te!==w)&&(n.blendColor(Vt.r,Vt.g,Vt.b,Te),M.copy(Vt),w=Te),p=z,C=!1}function oe(z,at){z.side===Nn?pt(n.CULL_FACE):et(n.CULL_FACE);let tt=z.side===yn;at&&(tt=!tt),Wt(tt),z.blending===Ys&&z.transparent===!1?$t(ui):$t(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let At=z.stencilWrite;a.setTest(At),At&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ge(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(z){N!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),N=z)}function jt(z){z!==ju?(et(n.CULL_FACE),z!==H&&(z===wc?n.cullFace(n.BACK):z===Qu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),H=z}function ye(z){z!==U&&(Z&&n.lineWidth(z),U=z)}function Ge(z,at,tt){z?(et(n.POLYGON_OFFSET_FILL),(I!==at||B!==tt)&&(I=at,B=tt,o.getReversed()&&(at=-at),n.polygonOffset(at,tt))):pt(n.POLYGON_OFFSET_FILL)}function Me(z){z?et(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function Ee(z){z===void 0&&(z=n.TEXTURE0+Y-1),ot!==z&&(n.activeTexture(z),ot=z)}function V(z,at,tt){tt===void 0&&(ot===null?tt=n.TEXTURE0+Y-1:tt=ot);let At=nt[tt];At===void 0&&(At={type:void 0,texture:void 0},nt[tt]=At),(At.type!==z||At.texture!==at)&&(ot!==tt&&(n.activeTexture(tt),ot=tt),n.bindTexture(z,at||q[z]),At.type=z,At.texture=at)}function Ne(){let z=nt[ot];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function me(){try{n.compressedTexImage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function y(){try{n.texSubImage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function X(){try{n.texSubImage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function lt(){try{n.compressedTexSubImage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function St(){try{n.texStorage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function wt(){try{n.texStorage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function ct(){try{n.texImage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function ht(){try{n.texImage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function Tt(z){return h[z]!==void 0?h[z]:n.getParameter(z)}function Yt(z,at){h[z]!==at&&(n.pixelStorei(z,at),h[z]=at)}function It(z){yt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),yt.copy(z))}function Ct(z){bt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),bt.copy(z))}function Xt(z,at){let tt=c.get(at);tt===void 0&&(tt=new WeakMap,c.set(at,tt));let At=tt.get(z);At===void 0&&(At=n.getUniformBlockIndex(at,z.name),tt.set(z,At))}function Zt(z,at){let At=c.get(at).get(z);l.get(at)!==At&&(n.uniformBlockBinding(at,At,z.__bindingPointIndex),l.set(at,At))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ot=null,nt={},f={},m=new WeakMap,x=[],v=null,d=!1,p=null,A=null,L=null,b=null,T=null,E=null,D=null,M=new se(0,0,0),w=0,C=!1,N=null,H=null,U=null,I=null,B=null,yt.set(0,0,n.canvas.width,n.canvas.height),bt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:pt,bindFramebuffer:Lt,drawBuffers:ut,useProgram:Ft,setBlending:$t,setMaterial:oe,setFlipSided:Wt,setCullFace:jt,setLineWidth:ye,setPolygonOffset:Ge,setScissorTest:Me,activeTexture:Ee,bindTexture:V,unbindTexture:Ne,compressedTexImage2D:me,compressedTexImage3D:R,texImage2D:ct,texImage3D:ht,pixelStorei:Yt,getParameter:Tt,updateUBOMapping:Xt,uniformBlockBinding:Zt,texStorage2D:St,texStorage3D:wt,texSubImage2D:y,texSubImage3D:X,compressedTexSubImage2D:j,compressedTexSubImage3D:lt,scissor:It,viewport:Ct,reset:ie}}function Z_(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap,h=new Set,f,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return x?new OffscreenCanvas(R,y):br("canvas")}function d(R,y,X){let j=1,lt=me(R);if((lt.width>X||lt.height>X)&&(j=X/Math.max(lt.width,lt.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let St=Math.floor(j*lt.width),wt=Math.floor(j*lt.height);f===void 0&&(f=v(St,wt));let ct=y?v(St,wt):f;return ct.width=St,ct.height=wt,ct.getContext("2d").drawImage(R,0,0,St,wt),Kt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+St+"x"+wt+")."),ct}else return"data"in R&&Kt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),R;return R}function p(R){return R.generateMipmaps}function A(R){n.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,y,X,j,lt,St=!1){if(R!==null){if(n[R]!==void 0)return n[R];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let wt;j&&(wt=t.get("EXT_texture_norm16"),wt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=y;if(y===n.RED&&(X===n.FLOAT&&(ct=n.R32F),X===n.HALF_FLOAT&&(ct=n.R16F),X===n.UNSIGNED_BYTE&&(ct=n.R8),X===n.UNSIGNED_SHORT&&wt&&(ct=wt.R16_EXT),X===n.SHORT&&wt&&(ct=wt.R16_SNORM_EXT)),y===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ct=n.R8UI),X===n.UNSIGNED_SHORT&&(ct=n.R16UI),X===n.UNSIGNED_INT&&(ct=n.R32UI),X===n.BYTE&&(ct=n.R8I),X===n.SHORT&&(ct=n.R16I),X===n.INT&&(ct=n.R32I)),y===n.RG&&(X===n.FLOAT&&(ct=n.RG32F),X===n.HALF_FLOAT&&(ct=n.RG16F),X===n.UNSIGNED_BYTE&&(ct=n.RG8),X===n.UNSIGNED_SHORT&&wt&&(ct=wt.RG16_EXT),X===n.SHORT&&wt&&(ct=wt.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(ct=n.RG8UI),X===n.UNSIGNED_SHORT&&(ct=n.RG16UI),X===n.UNSIGNED_INT&&(ct=n.RG32UI),X===n.BYTE&&(ct=n.RG8I),X===n.SHORT&&(ct=n.RG16I),X===n.INT&&(ct=n.RG32I)),y===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(ct=n.RGB8UI),X===n.UNSIGNED_SHORT&&(ct=n.RGB16UI),X===n.UNSIGNED_INT&&(ct=n.RGB32UI),X===n.BYTE&&(ct=n.RGB8I),X===n.SHORT&&(ct=n.RGB16I),X===n.INT&&(ct=n.RGB32I)),y===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(ct=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(ct=n.RGBA16UI),X===n.UNSIGNED_INT&&(ct=n.RGBA32UI),X===n.BYTE&&(ct=n.RGBA8I),X===n.SHORT&&(ct=n.RGBA16I),X===n.INT&&(ct=n.RGBA32I)),y===n.RGB&&(X===n.UNSIGNED_SHORT&&wt&&(ct=wt.RGB16_EXT),X===n.SHORT&&wt&&(ct=wt.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(ct=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(ct=n.R11F_G11F_B10F)),y===n.RGBA){let ht=St?Mr:pe.getTransfer(lt);X===n.FLOAT&&(ct=n.RGBA32F),X===n.HALF_FLOAT&&(ct=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ct=ht===we?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&wt&&(ct=wt.RGBA16_EXT),X===n.SHORT&&wt&&(ct=wt.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(ct=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ct=n.RGB5_A1)}return(ct===n.R16F||ct===n.R32F||ct===n.RG16F||ct===n.RG32F||ct===n.RGBA16F||ct===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function T(R,y){let X;return R?y===null||y===Yn||y===Zs?X=n.DEPTH24_STENCIL8:y===$n?X=n.DEPTH32F_STENCIL8:y===$s&&(X=n.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Yn||y===Zs?X=n.DEPTH_COMPONENT24:y===$n?X=n.DEPTH_COMPONENT32F:y===$s&&(X=n.DEPTH_COMPONENT16),X}function E(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==$e?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function D(R){let y=R.target;y.removeEventListener("dispose",D),w(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&h.delete(y)}function M(R){let y=R.target;y.removeEventListener("dispose",M),N(y)}function w(R){let y=i.get(R);if(y.__webglInit===void 0)return;let X=R.source,j=m.get(X);if(j){let lt=j[y.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&C(R),Object.keys(j).length===0&&m.delete(X)}i.remove(R)}function C(R){let y=i.get(R);n.deleteTexture(y.__webglTexture);let X=R.source,j=m.get(X);delete j[y.__cacheKey],o.memory.textures--}function N(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let lt=0;lt<y.__webglFramebuffer[j].length;lt++)n.deleteFramebuffer(y.__webglFramebuffer[j][lt]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let X=R.textures;for(let j=0,lt=X.length;j<lt;j++){let St=i.get(X[j]);St.__webglTexture&&(n.deleteTexture(St.__webglTexture),o.memory.textures--),i.remove(X[j])}i.remove(R)}let H=0;function U(){H=0}function I(){return H}function B(R){H=R}function Y(){let R=H;return R>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,R}function Z(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function st(R,y){let X=i.get(R);if(R.isVideoTexture&&V(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){let j=R.image;if(j===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(X,R,y);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+y)}function O(R,y){let X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){pt(X,R,y);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+y)}function ot(R,y){let X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){pt(X,R,y);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+y)}function nt(R,y){let X=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&X.__version!==R.version){Lt(X,R,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+y)}let Mt={[na]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[ia]:n.MIRRORED_REPEAT},dt={[on]:n.NEAREST,[Sf]:n.NEAREST_MIPMAP_NEAREST,[Gr]:n.NEAREST_MIPMAP_LINEAR,[$e]:n.LINEAR,[Da]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},yt={[Tf]:n.NEVER,[Pf]:n.ALWAYS,[Af]:n.LESS,[gl]:n.LEQUAL,[Cf]:n.EQUAL,[xl]:n.GEQUAL,[Rf]:n.GREATER,[If]:n.NOTEQUAL};function bt(R,y){if(y.type===$n&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===$e||y.magFilter===Da||y.magFilter===Gr||y.magFilter===$i||y.minFilter===$e||y.minFilter===Da||y.minFilter===Gr||y.minFilter===$i)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Mt[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Mt[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Mt[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,dt[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,dt[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==Gr&&y.minFilter!==$i||y.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function xt(R,y){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",D));let j=y.source,lt=m.get(j);lt===void 0&&(lt={},m.set(j,lt));let St=Z(y);if(St!==R.__cacheKey){lt[St]===void 0&&(lt[St]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),lt[St].usedTimes++;let wt=lt[R.__cacheKey];wt!==void 0&&(lt[R.__cacheKey].usedTimes--,wt.usedTimes===0&&C(y)),R.__cacheKey=St,R.__webglTexture=lt[St].texture}return X}function q(R,y,X){return Math.floor(Math.floor(R/X)/y)}function et(R,y,X,j){let St=R.updateRanges;if(St.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,X,j,y.data);else{St.sort((Yt,It)=>Yt.start-It.start);let wt=0;for(let Yt=1;Yt<St.length;Yt++){let It=St[wt],Ct=St[Yt],Xt=It.start+It.count,Zt=q(Ct.start,y.width,4),ie=q(It.start,y.width,4);Ct.start<=Xt+1&&Zt===ie&&q(Ct.start+Ct.count-1,y.width,4)===Zt?It.count=Math.max(It.count,Ct.start+Ct.count-It.start):(++wt,St[wt]=Ct)}St.length=wt+1;let ct=e.getParameter(n.UNPACK_ROW_LENGTH),ht=e.getParameter(n.UNPACK_SKIP_PIXELS),Tt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Yt=0,It=St.length;Yt<It;Yt++){let Ct=St[Yt],Xt=Math.floor(Ct.start/4),Zt=Math.ceil(Ct.count/4),ie=Xt%y.width,z=Math.floor(Xt/y.width),at=Zt,tt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,ie,z,at,tt,X,j,y.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ct),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,Tt)}}function pt(R,y,X){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);let lt=xt(R,y),St=y.source;e.bindTexture(j,R.__webglTexture,n.TEXTURE0+X);let wt=i.get(St);if(St.version!==wt.__version||lt===!0){if(e.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let tt=pe.getPrimaries(pe.workingColorSpace),At=y.colorSpace===Ei?null:pe.getPrimaries(y.colorSpace),Rt=y.colorSpace===Ei||tt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let ht=d(y.image,!1,s.maxTextureSize);ht=Ne(y,ht);let Tt=r.convert(y.format,y.colorSpace),Yt=r.convert(y.type),It=b(y.internalFormat,Tt,Yt,y.normalized,y.colorSpace,y.isVideoTexture);bt(j,y);let Ct,Xt=y.mipmaps,Zt=y.isVideoTexture!==!0,ie=wt.__version===void 0||lt===!0,z=St.dataReady,at=E(y,ht);if(y.isDepthTexture)It=T(y.format===Zi,y.type),ie&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,It,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,It,ht.width,ht.height,0,Tt,Yt,null));else if(y.isDataTexture)if(Xt.length>0){Zt&&ie&&e.texStorage2D(n.TEXTURE_2D,at,It,Xt[0].width,Xt[0].height);for(let tt=0,At=Xt.length;tt<At;tt++)Ct=Xt[tt],Zt?z&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Ct.width,Ct.height,Tt,Yt,Ct.data):e.texImage2D(n.TEXTURE_2D,tt,It,Ct.width,Ct.height,0,Tt,Yt,Ct.data);y.generateMipmaps=!1}else Zt?(ie&&e.texStorage2D(n.TEXTURE_2D,at,It,ht.width,ht.height),z&&et(y,ht,Tt,Yt)):e.texImage2D(n.TEXTURE_2D,0,It,ht.width,ht.height,0,Tt,Yt,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Zt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,It,Xt[0].width,Xt[0].height,ht.depth);for(let tt=0,At=Xt.length;tt<At;tt++)if(Ct=Xt[tt],y.format!==Un)if(Tt!==null)if(Zt){if(z)if(y.layerUpdates.size>0){let Rt=jc(Ct.width,Ct.height,y.format,y.type);for(let ft of y.layerUpdates){let Ht=Ct.data.subarray(ft*Rt/Ct.data.BYTES_PER_ELEMENT,(ft+1)*Rt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,ft,Ct.width,Ct.height,1,Tt,Ht)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Ct.width,Ct.height,ht.depth,Tt,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,It,Ct.width,Ct.height,ht.depth,0,Ct.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Ct.width,Ct.height,ht.depth,Tt,Yt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,It,Ct.width,Ct.height,ht.depth,0,Tt,Yt,Ct.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Zt&&ie&&e.texStorage2D(n.TEXTURE_2D,at,It,Xt[0].width,Xt[0].height);for(let tt=0,At=Xt.length;tt<At;tt++)Ct=Xt[tt],y.format!==Un?Tt!==null?Zt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,Ct.width,Ct.height,Tt,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,It,Ct.width,Ct.height,0,Ct.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?z&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Ct.width,Ct.height,Tt,Yt,Ct.data):e.texImage2D(n.TEXTURE_2D,tt,It,Ct.width,Ct.height,0,Tt,Yt,Ct.data)}else if(y.isDataArrayTexture)if(Zt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,It,ht.width,ht.height,ht.depth),z)if(y.layerUpdates.size>0){let tt=jc(ht.width,ht.height,y.format,y.type);for(let At of y.layerUpdates){let Rt=ht.data.subarray(At*tt/ht.data.BYTES_PER_ELEMENT,(At+1)*tt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,At,ht.width,ht.height,1,Tt,Yt,Rt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Yt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,ht.width,ht.height,ht.depth,0,Tt,Yt,ht.data);else if(y.isData3DTexture)Zt?(ie&&e.texStorage3D(n.TEXTURE_3D,at,It,ht.width,ht.height,ht.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Yt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,It,ht.width,ht.height,ht.depth,0,Tt,Yt,ht.data);else if(y.isFramebufferTexture){if(ie)if(Zt)e.texStorage2D(n.TEXTURE_2D,at,It,ht.width,ht.height);else{let tt=ht.width,At=ht.height;for(let Rt=0;Rt<at;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,It,tt,At,0,Tt,Yt,null),tt>>=1,At>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let tt=n.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),ht.parentNode!==tt){tt.appendChild(ht),h.add(y),tt.onpaint=At=>{let Rt=At.changedElements;for(let ft of h)Rt.includes(ft.image)&&(ft.needsUpdate=!0)},tt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ht);else{let Rt=n.RGBA,ft=n.RGBA,Ht=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,ft,Ht,ht)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Zt&&ie){let tt=me(Xt[0]);e.texStorage2D(n.TEXTURE_2D,at,It,tt.width,tt.height)}for(let tt=0,At=Xt.length;tt<At;tt++)Ct=Xt[tt],Zt?z&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Tt,Yt,Ct):e.texImage2D(n.TEXTURE_2D,tt,It,Tt,Yt,Ct);y.generateMipmaps=!1}else if(Zt){if(ie){let tt=me(ht);e.texStorage2D(n.TEXTURE_2D,at,It,tt.width,tt.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Yt,ht)}else e.texImage2D(n.TEXTURE_2D,0,It,Tt,Yt,ht);p(y)&&A(j),wt.__version=St.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Lt(R,y,X){if(y.image.length!==6)return;let j=xt(R,y),lt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+X);let St=i.get(lt);if(lt.version!==St.__version||j===!0){e.activeTexture(n.TEXTURE0+X);let wt=pe.getPrimaries(pe.workingColorSpace),ct=y.colorSpace===Ei?null:pe.getPrimaries(y.colorSpace),ht=y.colorSpace===Ei||wt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Tt=y.isCompressedTexture||y.image[0].isCompressedTexture,Yt=y.image[0]&&y.image[0].isDataTexture,It=[];for(let ft=0;ft<6;ft++)!Tt&&!Yt?It[ft]=d(y.image[ft],!0,s.maxCubemapSize):It[ft]=Yt?y.image[ft].image:y.image[ft],It[ft]=Ne(y,It[ft]);let Ct=It[0],Xt=r.convert(y.format,y.colorSpace),Zt=r.convert(y.type),ie=b(y.internalFormat,Xt,Zt,y.normalized,y.colorSpace),z=y.isVideoTexture!==!0,at=St.__version===void 0||j===!0,tt=lt.dataReady,At=E(y,Ct);bt(n.TEXTURE_CUBE_MAP,y);let Rt;if(Tt){z&&at&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,ie,Ct.width,Ct.height);for(let ft=0;ft<6;ft++){Rt=It[ft].mipmaps;for(let Ht=0;Ht<Rt.length;Ht++){let Vt=Rt[Ht];y.format!==Un?Xt!==null?z?tt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht,0,0,Vt.width,Vt.height,Xt,Vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht,ie,Vt.width,Vt.height,0,Vt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht,0,0,Vt.width,Vt.height,Xt,Zt,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht,ie,Vt.width,Vt.height,0,Xt,Zt,Vt.data)}}}else{if(Rt=y.mipmaps,z&&at){Rt.length>0&&At++;let ft=me(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,ie,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Yt){z?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,It[ft].width,It[ft].height,Xt,Zt,It[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ie,It[ft].width,It[ft].height,0,Xt,Zt,It[ft].data);for(let Ht=0;Ht<Rt.length;Ht++){let Te=Rt[Ht].image[ft].image;z?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht+1,0,0,Te.width,Te.height,Xt,Zt,Te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht+1,ie,Te.width,Te.height,0,Xt,Zt,Te.data)}}else{z?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Xt,Zt,It[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ie,Xt,Zt,It[ft]);for(let Ht=0;Ht<Rt.length;Ht++){let Vt=Rt[Ht];z?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht+1,0,0,Xt,Zt,Vt.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ht+1,ie,Xt,Zt,Vt.image[ft])}}}p(y)&&A(n.TEXTURE_CUBE_MAP),St.__version=lt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ut(R,y,X,j,lt,St){let wt=r.convert(X.format,X.colorSpace),ct=r.convert(X.type),ht=b(X.internalFormat,wt,ct,X.normalized,X.colorSpace),Tt=i.get(y),Yt=i.get(X);if(Yt.__renderTarget=y,!Tt.__hasExternalTextures){let It=Math.max(1,y.width>>St),Ct=Math.max(1,y.height>>St);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,St,ht,It,Ct,y.depth,0,wt,ct,null):e.texImage2D(lt,St,ht,It,Ct,0,wt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,lt,Yt.__webglTexture,0,Me(y)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,lt,Yt.__webglTexture,St),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(R,y,X){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){let j=y.depthTexture,lt=j&&j.isDepthTexture?j.type:null,St=T(y.stencilBuffer,lt),wt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ee(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me(y),St,y.width,y.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me(y),St,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,St,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,R)}else{let j=y.textures;for(let lt=0;lt<j.length;lt++){let St=j[lt],wt=r.convert(St.format,St.colorSpace),ct=r.convert(St.type),ht=b(St.internalFormat,wt,ct,St.normalized,St.colorSpace);Ee(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me(y),ht,y.width,y.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me(y),ht,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ht,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Jt(R,y,X){let j=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=i.get(y.depthTexture);if(lt.__renderTarget=y,(!lt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,y.depthTexture.addEventListener("dispose",D)),lt.__webglTexture===void 0){lt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,lt.__webglTexture),bt(n.TEXTURE_CUBE_MAP,y.depthTexture);let Tt=r.convert(y.depthTexture.format),Yt=r.convert(y.depthTexture.type),It;y.depthTexture.format===oi?It=n.DEPTH_COMPONENT24:y.depthTexture.format===Zi&&(It=n.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,It,y.width,y.height,0,Tt,Yt,null)}}else st(y.depthTexture,0);let St=lt.__webglTexture,wt=Me(y),ct=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,ht=y.depthTexture.format===Zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===oi)Ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,ct,St,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,ht,ct,St,0);else if(y.depthTexture.format===Zi)Ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,ct,St,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,ht,ct,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(R){let y=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){let lt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",lt)};j.addEventListener("dispose",lt),y.__depthDisposeCallback=lt}y.__boundDepthTexture=j}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let j=0;j<6;j++)Jt(y.__webglFramebuffer[j],R,j);else{let j=R.texture.mipmaps;j&&j.length>0?Jt(y.__webglFramebuffer[0],R,0):Jt(y.__webglFramebuffer,R,0)}else if(X){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),Ft(y.__webglDepthbuffer[j],R,!1);else{let lt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,St)}}else{let j=R.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ft(y.__webglDepthbuffer,R,!1);else{let lt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,St)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function $t(R,y,X){let j=i.get(R);y!==void 0&&ut(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Gt(R)}function oe(R){let y=R.texture,X=i.get(R),j=i.get(y);R.addEventListener("dispose",M);let lt=R.textures,St=R.isWebGLCubeRenderTarget===!0,wt=lt.length>1;if(wt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,o.memory.textures++),St){X.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[ct]=[];for(let ht=0;ht<y.mipmaps.length;ht++)X.__webglFramebuffer[ct][ht]=n.createFramebuffer()}else X.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let ct=0;ct<y.mipmaps.length;ct++)X.__webglFramebuffer[ct]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(wt)for(let ct=0,ht=lt.length;ct<ht;ct++){let Tt=i.get(lt[ct]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Ee(R)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ct=0;ct<lt.length;ct++){let ht=lt[ct];X.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ct]);let Tt=r.convert(ht.format,ht.colorSpace),Yt=r.convert(ht.type),It=b(ht.internalFormat,Tt,Yt,ht.normalized,ht.colorSpace,R.isXRRenderTarget===!0),Ct=Me(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,It,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,X.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(St){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),bt(n.TEXTURE_CUBE_MAP,y);for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)ut(X.__webglFramebuffer[ct][ht],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ht);else ut(X.__webglFramebuffer[ct],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(y)&&A(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ct=0,ht=lt.length;ct<ht;ct++){let Tt=lt[ct],Yt=i.get(Tt),It=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(It=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(It,Yt.__webglTexture),bt(It,Tt),ut(X.__webglFramebuffer,R,Tt,n.COLOR_ATTACHMENT0+ct,It,0),p(Tt)&&A(It)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,j.__webglTexture),bt(ct,y),y.mipmaps&&y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)ut(X.__webglFramebuffer[ht],R,y,n.COLOR_ATTACHMENT0,ct,ht);else ut(X.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,ct,0);p(y)&&A(ct),e.unbindTexture()}R.depthBuffer&&Gt(R)}function Wt(R){let y=R.textures;for(let X=0,j=y.length;X<j;X++){let lt=y[X];if(p(lt)){let St=L(R),wt=i.get(lt).__webglTexture;e.bindTexture(St,wt),A(St),e.unbindTexture()}}}let jt=[],ye=[];function Ge(R){if(R.samples>0){if(Ee(R)===!1){let y=R.textures,X=R.width,j=R.height,lt=n.COLOR_BUFFER_BIT,St=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(R),ct=y.length>1;if(ct)for(let Tt=0;Tt<y.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let ht=R.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Tt=0;Tt<y.length;Tt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);let Yt=i.get(y[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,X,j,0,0,X,j,lt,n.NEAREST),l===!0&&(jt.length=0,ye.length=0,jt.push(n.COLOR_ATTACHMENT0+Tt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(jt.push(St),ye.push(St),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let Tt=0;Tt<y.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);let Yt=i.get(y[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Me(R){return Math.min(s.maxSamples,R.samples)}function Ee(R){let y=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function V(R){let y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function Ne(R,y){let X=R.colorSpace,j=R.format,lt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==vr&&X!==Ei&&(pe.getTransfer(X)===we?(j!==Un||lt!==Pn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",X)),y}function me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=U,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=st,this.setTexture2DArray=O,this.setTexture3D=ot,this.setTextureCube=nt,this.rebindTextures=$t,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function J_(n,t){function e(i,s=Ei){let r,o=pe.getTransfer(s);if(i===Pn)return n.UNSIGNED_BYTE;if(i===Ua)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===zc)return n.BYTE;if(i===kc)return n.SHORT;if(i===$s)return n.UNSIGNED_SHORT;if(i===Na)return n.INT;if(i===Yn)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===Zn)return n.HALF_FLOAT;if(i===Hc)return n.ALPHA;if(i===Wc)return n.RGB;if(i===Un)return n.RGBA;if(i===oi)return n.DEPTH_COMPONENT;if(i===Zi)return n.DEPTH_STENCIL;if(i===Xc)return n.RED;if(i===Oa)return n.RED_INTEGER;if(i===Ji)return n.RG;if(i===Ba)return n.RG_INTEGER;if(i===za)return n.RGBA_INTEGER;if(i===Hr||i===Wr||i===Xr||i===qr)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ka||i===Va||i===Ga||i===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wa||i===Xa||i===qa||i===Ya||i===$a||i===Yr||i===Za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wa||i===Xa)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===qa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ya)return r.COMPRESSED_R11_EAC;if(i===$a)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Yr)return r.COMPRESSED_RG11_EAC;if(i===Za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ja||i===Ka||i===ja||i===Qa||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ja)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ka)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ja)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===il)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ol)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ll)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hl||i===ul||i===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===hl)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dl||i===pl||i===$r||i===ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Nr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new dn({vertexShader:K_,fragmentShader:j_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new We(new Fr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_h=class extends ai{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,x=null,v=typeof XRWebGLBinding<"u",d=new xh,p={},A=e.getContextAttributes(),L=null,b=null,T=[],E=[],D=new he,M=null,w=null,C=new fn;C.viewport=new Ve;let N=new fn;N.viewport=new Ve;let H=[C,N],U=new Ra,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=T[q];return et===void 0&&(et=new Hs,T[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=T[q];return et===void 0&&(et=new Hs,T[q]=et),et.getGripSpace()},this.getHand=function(q){let et=T[q];return et===void 0&&(et=new Hs,T[q]=et),et.getHandSpace()};function Y(q){let et=E.indexOf(q.inputSource);if(et===-1)return;let pt=T[et];pt!==void 0&&(pt.update(q.inputSource,q.frame,c||o),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",st);for(let q=0;q<T.length;q++){let et=E[q];et!==null&&(E[q]=null,T[q].disconnect(et))}I=null,B=null,d.reset();for(let q in p)delete p[q];if(t.setRenderTarget(L),m=null,f=null,h=null,s=null,b=null,xt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(D.width,D.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",st),A.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Lt=null,ut=null;A.depth&&(ut=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=A.stencil?Zi:oi,Lt=A.stencil?Zs:Yn);let Ft={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Sn(f.textureWidth,f.textureHeight,{format:Un,type:Pn,depthTexture:new Gi(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Sn(m.framebufferWidth,m.framebufferHeight,{format:Un,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xt.setContext(s),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function st(q){for(let et=0;et<q.removed.length;et++){let pt=q.removed[et],Lt=E.indexOf(pt);Lt>=0&&(E[Lt]=null,T[Lt].disconnect(pt))}for(let et=0;et<q.added.length;et++){let pt=q.added[et],Lt=E.indexOf(pt);if(Lt===-1){for(let Ft=0;Ft<T.length;Ft++)if(Ft>=E.length){E.push(pt),Lt=Ft;break}else if(E[Ft]===null){E[Ft]=pt,Lt=Ft;break}if(Lt===-1)break}let ut=T[Lt];ut&&ut.connect(pt)}}let O=new $,ot=new $;function nt(q,et,pt){O.setFromMatrixPosition(et.matrixWorld),ot.setFromMatrixPosition(pt.matrixWorld);let Lt=O.distanceTo(ot),ut=et.projectionMatrix.elements,Ft=pt.projectionMatrix.elements,Jt=ut[14]/(ut[10]-1),Gt=ut[14]/(ut[10]+1),$t=(ut[9]+1)/ut[5],oe=(ut[9]-1)/ut[5],Wt=(ut[8]-1)/ut[0],jt=(Ft[8]+1)/Ft[0],ye=Jt*Wt,Ge=Jt*jt,Me=Lt/(-Wt+jt),Ee=Me*-Wt;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ee),q.translateZ(Me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ut[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let V=Jt+Me,Ne=Gt+Me,me=ye-Ee,R=Ge+(Lt-Ee),y=$t*Gt/Ne*V,X=oe*Gt/Ne*V;q.projectionMatrix.makePerspective(me,R,y,X,V,Ne),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Mt(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,pt=q.far;d.texture!==null&&(d.depthNear>0&&(et=d.depthNear),d.depthFar>0&&(pt=d.depthFar)),U.near=N.near=C.near=et,U.far=N.far=C.far=pt,(I!==U.near||B!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,B=U.far),U.layers.mask=q.layers.mask|6,C.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;let Lt=q.parent,ut=U.cameras;Mt(U,Lt);for(let Ft=0;Ft<ut.length;Ft++)Mt(ut[Ft],Lt);ut.length===2?nt(U,C,N):U.projectionMatrix.copy(C.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),dt(q,U,Lt)};function dt(q,et,pt){pt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ra*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(U)},this.getCameraTexture=function(q){return p[q]};let yt=null;function bt(q,et){if(u=et.getViewerPose(c||o),x=et,u!==null){let pt=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let Lt=!1;pt.length!==U.cameras.length&&(U.cameras.length=0,Lt=!0);for(let Gt=0;Gt<pt.length;Gt++){let $t=pt[Gt],oe=null;if(m!==null)oe=m.getViewport($t);else{let jt=h.getViewSubImage(f,$t);oe=jt.viewport,Gt===0&&(t.setRenderTargetTextures(b,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(b))}let Wt=H[Gt];Wt===void 0&&(Wt=new fn,Wt.layers.enable(Gt),Wt.viewport=new Ve,H[Gt]=Wt),Wt.matrix.fromArray($t.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray($t.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(oe.x,oe.y,oe.width,oe.height),Gt===0&&(U.matrix.copy(Wt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Lt===!0&&U.cameras.push(Wt)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();let Gt=h.getDepthInformation(pt[0]);Gt&&Gt.isValid&&Gt.texture&&d.init(Gt,s.renderState)}if(ut&&ut.includes("camera-access")&&v){t.state.unbindTexture(),h=i.getBinding();for(let Gt=0;Gt<pt.length;Gt++){let $t=pt[Gt].camera;if($t){let oe=p[$t];oe||(oe=new Nr,p[$t]=oe);let Wt=h.getCameraImage($t);oe.sourceTexture=Wt}}}}for(let pt=0;pt<T.length;pt++){let Lt=E[pt],ut=T[pt];Lt!==null&&ut!==void 0&&ut.update(Lt,et,c||o)}yt&&yt(q,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),x=null}let xt=new ld;xt.setAnimationLoop(bt),this.setAnimationLoop=function(q){yt=q},this.dispose=function(){}}},Q_=new Be,pd=new re;pd.set(-1,0,0,0,1,0,0,0,1);function ty(n,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Zc(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,A,L,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(d,p):p.isMeshLambertMaterial?(r(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(d,p),h(d,p)):p.isMeshPhongMaterial?(r(d,p),u(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,b)):p.isMeshMatcapMaterial?(r(d,p),x(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),v(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,A,L):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===yn&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===yn&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let A=t.get(p),L=A.envMap,b=A.envMapRotation;L&&(d.envMap.value=L,d.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(b)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(pd),d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,A,L){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*A,d.scale.value=L*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,A){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.retroreflectivity>0&&(d.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=A.texture,d.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,p){p.matcap&&(d.matcap.value=p.matcap)}function v(d,p){let A=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(A.matrixWorld),d.nearDistance.value=A.shadow.camera.near,d.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ey(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){let E=T.program;i.uniformBlockBinding(b,E)}function c(b,T){let E=s[b.id];E===void 0&&(d(b),E=u(b),s[b.id]=E,b.addEventListener("dispose",A));let D=T.program;i.updateUBOMapping(b,D);let M=t.render.frame;r[b.id]!==M&&(f(b),r[b.id]=M)}function u(b){let T=h();b.__bindingPointIndex=T;let E=n.createBuffer(),D=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,D,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let T=s[b.id],E=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let M=0,w=E.length;M<w;M++){let C=E[M];if(Array.isArray(C))for(let N=0,H=C.length;N<H;N++)m(C[N],M,N,D);else m(C,M,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,T,E,D){if(v(b,T,E,D)===!0){let M=b.__offset,w=b.value;if(Array.isArray(w)){let C=0;for(let N=0;N<w.length;N++){let H=w[N],U=p(H);x(H,b.__data,C),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(C+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(w,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,b.__data)}}function x(b,T,E){typeof b=="number"||typeof b=="boolean"?T[0]=b:b.isMatrix3?(T[0]=b.elements[0],T[1]=b.elements[1],T[2]=b.elements[2],T[3]=0,T[4]=b.elements[3],T[5]=b.elements[4],T[6]=b.elements[5],T[7]=0,T[8]=b.elements[6],T[9]=b.elements[7],T[10]=b.elements[8],T[11]=0):ArrayBuffer.isView(b)?T.set(new b.constructor(b.buffer,b.byteOffset,T.length)):b.toArray(T,E)}function v(b,T,E,D){let M=b.value,w=T+"_"+E;if(D[w]===void 0)return typeof M=="number"||typeof M=="boolean"?D[w]=M:ArrayBuffer.isView(M)?D[w]=M.slice():D[w]=M.clone(),!0;{let C=D[w];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return D[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function d(b){let T=b.uniforms,E=0,D=16;for(let w=0,C=T.length;w<C;w++){let N=Array.isArray(T[w])?T[w]:[T[w]];for(let H=0,U=N.length;H<U;H++){let I=N[H],B=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,Z=B.length;Y<Z;Y++){let st=B[Y],O=p(st),ot=E%D,nt=ot%O.boundary,Mt=ot+nt;E+=nt,Mt!==0&&D-Mt<O.storage&&(E+=D-Mt),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=O.storage}}}let M=E%D;return M>0&&(E+=D-M),b.__size=E,b.__cache={},this}function p(b){let T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",b),T}function A(b){let T=b.target;T.removeEventListener("dispose",A);let E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function L(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:L}}var ny=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function iy(){return fi===null&&(fi=new ha(ny,16,16,Ji,Zn),fi.name="DFG_LUT",fi.minFilter=$e,fi.magFilter=$e,fi.wrapS=ri,fi.wrapT=ri,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Sl=class{constructor(t={}){let{canvas:e=Lf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Pn}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;let v=m,d=new Set([za,Ba,Oa]),p=new Set([Pn,Yn,$s,Zs,Ua,Fa]),A=new Uint32Array(4),L=new Int32Array(4),b=new $,T=null,E=null,D=[],M=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,H=null,U=null,I=null,B=null;this._outputColorSpace=rn;let Y=0,Z=0,st=null,O=-1,ot=null,nt=new Ve,Mt=new Ve,dt=null,yt=new se(0),bt=0,xt=e.width,q=e.height,et=1,pt=null,Lt=null,ut=new Ve(0,0,xt,q),Ft=new Ve(0,0,xt,q),Jt=!1,Gt=new Pr,$t=!1,oe=!1,Wt=new Be,jt=new $,ye=new Ve,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ee(){return st===null?et:1}let V=i;function Ne(S,k){return e.getContext(S,k)}let me,R,y,X,j,lt,St,wt,ct,ht,Tt,Yt,It,Ct,Xt,Zt,ie,z,at,tt,At,Rt,ft;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",ge,!1),V===null){let k="webgl2";if(V=Ne(k,S),V===null)throw Ne(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(S){throw e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),ee("WebGLRenderer: "+S.message),S}function Ht(){me=new hx(V),me.init(),At=new J_(V,me),R=new tx(V,me,t,At),y=new $_(V,me),R.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),U=V.createFramebuffer(),I=V.createFramebuffer(),B=V.createFramebuffer(),X=new dx(V),j=new N_,lt=new Z_(V,me,y,j,R,At,X),St=new cx(C),wt=new mm(V),Rt=new jg(V,wt),ct=new ux(V,wt,X,Rt),ht=new mx(V,ct,wt,Rt,X),z=new px(V,R,lt),Xt=new ex(j),Tt=new D_(C,St,me,R,Rt,Xt),Yt=new ty(C,j),It=new F_,Ct=new G_(me),ie=new Kg(C,St,y,ht,x,l),Zt=new Y_(C,ht,R),ft=new ey(V,X,R,y),at=new Qg(V,me,X),tt=new fx(V,me,X),X.programs=Tt.programs,C.capabilities=R,C.extensions=me,C.properties=j,C.renderLists=It,C.shadowMap=Zt,C.state=y,C.info=X}v!==Pn&&(w=new xx(v,e.width,e.height,a,s,r));let Vt=new _h(C,V);this.xr=Vt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let S=me.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=me.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(S){S!==void 0&&(et=S,this.setSize(xt,q,!1))},this.getSize=function(S){return S.set(xt,q)},this.setSize=function(S,k,rt=!0){if(Vt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=S,q=k,e.width=Math.floor(S*et),e.height=Math.floor(k*et),rt===!0&&(e.style.width=S+"px",e.style.height=k+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(xt*et,q*et).floor()},this.setDrawingBufferSize=function(S,k,rt){xt=S,q=k,et=rt,e.width=Math.floor(S*rt),e.height=Math.floor(k*rt),this.setViewport(0,0,S,k)},this.setEffects=function(S){if(v===Pn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let k=0;k<S.length;k++)if(S[k].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(nt)},this.getViewport=function(S){return S.copy(ut)},this.setViewport=function(S,k,rt,Q){S.isVector4?ut.set(S.x,S.y,S.z,S.w):ut.set(S,k,rt,Q),y.viewport(nt.copy(ut).multiplyScalar(et).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,k,rt,Q){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,k,rt,Q),y.scissor(Mt.copy(Ft).multiplyScalar(et).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(S){y.setScissorTest(Jt=S)},this.setOpaqueSort=function(S){pt=S},this.setTransparentSort=function(S){Lt=S},this.getClearColor=function(S){return S.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,rt=!0){let Q=0;if(S){let K=!1;if(st!==null){let Dt=st.texture.format;K=d.has(Dt)}if(K){let Dt=st.texture.type,Bt=p.has(Dt),Pt=ie.getClearColor(),zt=ie.getClearAlpha(),qt=Pt.r,le=Pt.g,Qt=Pt.b;Bt?(A[0]=qt,A[1]=le,A[2]=Qt,A[3]=zt,V.clearBufferuiv(V.COLOR,0,A)):(L[0]=qt,L[1]=le,L[2]=Qt,L[3]=zt,V.clearBufferiv(V.COLOR,0,L))}else Q|=V.COLOR_BUFFER_BIT}k&&(Q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(Q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&V.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),H=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),ie.dispose(),It.dispose(),Ct.dispose(),j.dispose(),St.dispose(),ht.dispose(),Rt.dispose(),ft.dispose(),Tt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Ii),Vt.removeEventListener("sessionend",lr),Qn.stop()};function Te(S){S.preventDefault(),wr("WebGLRenderer: Context Lost."),N=!0}function ve(){wr("WebGLRenderer: Context Restored."),N=!1;let S=X.autoReset,k=Zt.enabled,rt=Zt.autoUpdate,Q=Zt.needsUpdate,K=Zt.type;Ht(),X.autoReset=S,Zt.enabled=k,Zt.autoUpdate=rt,Zt.needsUpdate=Q,Zt.type=K}function ge(S){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function En(S){let k=S.target;k.removeEventListener("dispose",En),Wl(k)}function Wl(S){ar(S),j.remove(S)}function ar(S){let k=j.get(S).programs;k!==void 0&&(k.forEach(function(rt){Tt.releaseProgram(rt)}),S.isShaderMaterial&&Tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,rt,Q,K,Dt){k===null&&(k=Ge);let Bt=K.isMesh&&K.matrixWorld.determinantAffine()<0,Pt=ys(S,k,rt,Q,K);y.setMaterial(Q,Bt);let zt=rt.index,qt=1;if(Q.wireframe===!0){if(zt=ct.getWireframeAttribute(rt),zt===void 0)return;qt=2}let le=rt.drawRange,Qt=rt.attributes.position,Et=le.start*qt,_e=(le.start+le.count)*qt;Dt!==null&&(Et=Math.max(Et,Dt.start*qt),_e=Math.min(_e,(Dt.start+Dt.count)*qt)),zt!==null?(Et=Math.max(Et,0),_e=Math.min(_e,zt.count)):Qt!=null&&(Et=Math.max(Et,0),_e=Math.min(_e,Qt.count));let ze=_e-Et;if(ze<0||ze===1/0)return;Rt.setup(K,Q,Pt,rt,zt);let Ae,fe=at;if(zt!==null&&(Ae=wt.get(zt),fe=tt,fe.setIndex(Ae)),K.isMesh)Q.wireframe===!0?(y.setLineWidth(Q.wireframeLinewidth*Ee()),fe.setMode(V.LINES)):fe.setMode(V.TRIANGLES);else if(K.isLine){let qe=Q.linewidth;qe===void 0&&(qe=1),y.setLineWidth(qe*Ee()),K.isLineSegments?fe.setMode(V.LINES):K.isLineLoop?fe.setMode(V.LINE_LOOP):fe.setMode(V.LINE_STRIP)}else K.isPoints?fe.setMode(V.POINTS):K.isSprite&&fe.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(me.get("WEBGL_multi_draw"))fe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let qe=K._multiDrawStarts,Ot=K._multiDrawCounts,nn=K._multiDrawCount,de=zt?wt.get(zt).bytesPerElement:1,ke=j.get(Q).currentProgram.getUniforms();for(let Ze=0;Ze<nn;Ze++)ke.setValue(V,"_gl_DrawID",Ze),fe.render(qe[Ze]/de,Ot[Ze])}else if(K.isInstancedMesh)fe.renderInstances(Et,ze,K.count);else if(rt.isInstancedBufferGeometry){let qe=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ot=Math.min(rt.instanceCount,qe);fe.renderInstances(Et,ze,Ot)}else fe.render(Et,ze)};function ho(S,k,rt,Q){H!==null&&S.isNodeMaterial&&H.setObject(Q,S),$t===!0&&Xt.setState(S,rt,!1),S.transparent===!0&&S.side===Nn&&S.forceSinglePass===!1?(S.side=yn,S.needsUpdate=!0,ti(S,k,Q),S.side=qi,S.needsUpdate=!0,ti(S,k,Q),S.side=Nn):ti(S,k,Q)}this.compile=function(S,k,rt=null){rt===null&&(rt=S),H!==null&&H.renderStart(S,k,rt),E=Ct.get(rt),E.init(k),M.push(E),rt.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),S!==rt&&S.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights(),H!==null&&H.updateLights(E.state.lightsArray),oe=this.localClippingEnabled,$t=Xt.init(this.clippingPlanes,oe),$t===!0&&Xt.setGlobalState(this.clippingPlanes,k),H!==null&&Zt.render(E.state.shadowsArray,rt,k);let Q=new Set;return S.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){let Pt=Dt[Bt];ho(Pt,rt,k,K),Q.add(Pt)}else ho(Dt,rt,k,K),Q.add(Dt)}),E=M.pop(),H!==null&&H.renderEnd(),Q},this.compileAsync=function(S,k,rt=null){let Q=this.compile(S,k,rt);return new Promise(K=>{function Dt(){if(Q.forEach(function(Bt){let zt=j.get(Bt).currentProgram;(zt===void 0||zt.isReady())&&Q.delete(Bt)}),Q.size===0){K(S);return}setTimeout(Dt,10)}me.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Tn=null;function _s(S){Tn&&Tn(S)}function Ii(){Qn.stop()}function lr(){Qn.start()}let Qn=new ld;Qn.setAnimationLoop(_s),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(S){Tn=S,Vt.setAnimationLoop(S),S===null?Qn.stop():Qn.start()},Vt.addEventListener("sessionstart",Ii),Vt.addEventListener("sessionend",lr),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;H!==null&&H.renderStart(S,k);let rt=Vt.enabled===!0&&Vt.isPresenting===!0,Q=w!==null&&(st===null||rt)&&w.begin(C,st);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(k),k=Vt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,k,st),E=Ct.get(S,M.length),E.init(k),E.state.textureUnits=lt.getTextureUnits(),M.push(E),Wt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Gt.setFromProjectionMatrix(Wt,Hn,k.reversedDepth),oe=this.localClippingEnabled,$t=Xt.init(this.clippingPlanes,oe),T=It.get(S,D.length),T.init(),D.push(T),Vt.enabled===!0&&Vt.isPresenting===!0){let Bt=C.xr.getDepthSensingMesh();Bt!==null&&mi(Bt,k,-1/0,C.sortObjects)}mi(S,k,0,C.sortObjects),T.finish(),H!==null&&H.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(pt,Lt),Me=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Me&&ie.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&Xt.beginShadows();let K=E.state.shadowsArray;if(Zt.render(K,S,k),$t===!0&&Xt.endShadows(),(Q&&w.hasRenderPass())===!1){let Bt=T.opaque,Pt=T.transmissive;if(E.setupLights(),k.isArrayCamera){let zt=k.cameras;if(Pt.length>0)for(let qt=0,le=zt.length;qt<le;qt++){let Qt=zt[qt];fo(Bt,Pt,S,Qt)}Me&&ie.render(S);for(let qt=0,le=zt.length;qt<le;qt++){let Qt=zt[qt];uo(T,S,Qt,Qt.viewport)}}else Pt.length>0&&fo(Bt,Pt,S,k),Me&&ie.render(S),uo(T,S,k)}st!==null&&Z===0&&(lt.updateMultisampleRenderTarget(st),lt.updateRenderTargetMipmap(st)),Q&&w.end(C),S.isScene===!0&&S.onAfterRender(C,S,k),Rt.resetDefaultState(),O=-1,ot=null,M.pop(),M.length>0?(E=M[M.length-1],lt.setTextureUnits(E.state.textureUnits),$t===!0&&Xt.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,D.pop(),D.length>0?T=D[D.length-1]:T=null,H!==null&&H.renderEnd()};function mi(S,k,rt,Q){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)rt=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Gt)){Q&&ye.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Wt);let Bt=ht.update(S),Pt=S.material;Pt.visible&&T.push(S,Bt,Pt,rt,ye.z,null,k)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Gt))){let Bt=ht.update(S),Pt=S.material;if(Q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ye.copy(S.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),ye.copy(Bt.boundingSphere.center)),ye.applyMatrix4(S.matrixWorld).applyMatrix4(Wt)),Array.isArray(Pt)){let zt=Bt.groups;for(let qt=0,le=zt.length;qt<le;qt++){let Qt=zt[qt],Et=Pt[Qt.materialIndex];Et&&Et.visible&&T.push(S,Bt,Et,rt,ye.z,Qt,k)}}else Pt.visible&&T.push(S,Bt,Pt,rt,ye.z,null,k)}}let Dt=S.children;for(let Bt=0,Pt=Dt.length;Bt<Pt;Bt++)mi(Dt[Bt],k,rt,Q)}function uo(S,k,rt,Q){let{opaque:K,transmissive:Dt,transparent:Bt}=S;E.setupLightsView(rt),$t===!0&&Xt.setGlobalState(C.clippingPlanes,rt),Q&&y.viewport(nt.copy(Q)),K.length>0&&Pi(K,k,rt),Dt.length>0&&Pi(Dt,k,rt),Bt.length>0&&Pi(Bt,k,rt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function fo(S,k,rt,Q){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Q.id]===void 0){let Et=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Q.id]=new Sn(1,1,{generateMipmaps:!0,type:Et?Zn:Pn,minFilter:$i,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let Dt=E.state.transmissionRenderTarget[Q.id],Bt=Q.viewport||nt;Dt.setSize(Bt.z*C.transmissionResolutionScale,Bt.w*C.transmissionResolutionScale);let Pt=C.getRenderTarget(),zt=C.getActiveCubeFace(),qt=C.getActiveMipmapLevel();C.setRenderTarget(Dt),C.getClearColor(yt),bt=C.getClearAlpha(),bt<1&&C.setClearColor(16777215,.5),C.clear(),Me&&ie.render(rt);let le=C.toneMapping;C.toneMapping=qn;let Qt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),E.setupLightsView(Q),$t===!0&&Xt.setGlobalState(C.clippingPlanes,Q),Pi(S,rt,Q),lt.updateMultisampleRenderTarget(Dt),lt.updateRenderTargetMipmap(Dt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let _e=0,ze=k.length;_e<ze;_e++){let Ae=k[_e],{object:fe,geometry:qe,material:Ot,group:nn}=Ae;if(Ot.side===Nn&&fe.layers.test(Q.layers)){let de=Ot.side;Ot.side=yn,Ot.needsUpdate=!0,Qi(fe,rt,Q,qe,Ot,nn),Ot.side=de,Ot.needsUpdate=!0,Et=!0}}Et===!0&&(lt.updateMultisampleRenderTarget(Dt),lt.updateRenderTargetMipmap(Dt))}C.setRenderTarget(Pt,zt,qt),C.setClearColor(yt,bt),Qt!==void 0&&(Q.viewport=Qt),C.toneMapping=le}function Pi(S,k,rt){let Q=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Dt=S.length;K<Dt;K++){let Bt=S[K],{object:Pt,geometry:zt,group:qt}=Bt,le=Bt.material;le.allowOverride===!0&&Q!==null&&(le=Q),Pt.layers.test(rt.layers)&&Qi(Pt,k,rt,zt,le,qt)}}function Qi(S,k,rt,Q,K,Dt){H!==null&&K.isNodeMaterial&&H.setObject(S,K),S.onBeforeRender(C,k,rt,Q,K,Dt),S.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),K.onBeforeRender(C,k,rt,Q,S,Dt),K.transparent===!0&&K.side===Nn&&K.forceSinglePass===!1?(K.side=yn,K.needsUpdate=!0,C.renderBufferDirect(rt,k,Q,K,S,Dt),K.side=qi,K.needsUpdate=!0,C.renderBufferDirect(rt,k,Q,K,S,Dt),K.side=Nn):C.renderBufferDirect(rt,k,Q,K,S,Dt),S.onAfterRender(C,k,rt,Q,K,Dt)}function ti(S,k,rt){k.isScene!==!0&&(k=Ge);let Q=j.get(S),K=E.state.lights,Dt=E.state.shadowsArray,Bt=K.state.version,Pt=Tt.getParameters(S,K.state,Dt,k,rt,E.state.lightProbeGridArray),zt=Tt.getProgramCacheKey(Pt),qt=Q.programs;Q.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,Q.fog=k.fog;let le=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;Q.envMap=St.get(S.envMap||Q.environment,le),Q.envMapRotation=Q.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,qt===void 0&&(S.addEventListener("dispose",En),qt=new Map,Q.programs=qt);let Qt=qt.get(zt);if(Qt!==void 0){if(Q.currentProgram===Qt&&Q.lightsStateVersion===Bt)return cr(S,Pt),Qt}else Pt.uniforms=Tt.getUniforms(S),H!==null&&S.isNodeMaterial&&H.build(S,rt,Pt),S.onBeforeCompile(Pt,C),Qt=Tt.acquireProgram(Pt,zt),qt.set(zt,Qt),Q.uniforms=Pt.uniforms;let Et=Q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=Xt.uniform),cr(S,Pt),Q.needsLights=mo(S),Q.lightsStateVersion=Bt,Q.needsLights&&(Et.ambientLightColor.value=K.state.ambient,Et.lightProbe.value=K.state.probe,Et.sunLights.value=K.state.sun,Et.sunLightShadows.value=K.state.sunShadow,Et.directionalLights.value=K.state.directional,Et.directionalLightShadows.value=K.state.directionalShadow,Et.spotLights.value=K.state.spot,Et.spotLightShadows.value=K.state.spotShadow,Et.rectAreaLights.value=K.state.rectArea,Et.ltc_1.value=K.state.rectAreaLTC1,Et.ltc_2.value=K.state.rectAreaLTC2,Et.pointLights.value=K.state.point,Et.pointLightShadows.value=K.state.pointShadow,Et.hemisphereLights.value=K.state.hemi,Et.sunShadowMatrix.value=K.state.sunShadowMatrix,Et.sunShadowCascade.value=K.state.sunShadowCascade,Et.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Et.spotLightMatrix.value=K.state.spotLightMatrix,Et.spotLightMap.value=K.state.spotLightMap,Et.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.lightProbeGrid=E.state.lightProbeGridArray.length>0,Q.currentProgram=Qt,Q.uniformsList=null,Qt}function po(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=js.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function cr(S,k){let rt=j.get(S);rt.outputColorSpace=k.outputColorSpace,rt.batching=k.batching,rt.batchingColor=k.batchingColor,rt.instancing=k.instancing,rt.instancingColor=k.instancingColor,rt.instancingMorph=k.instancingMorph,rt.skinning=k.skinning,rt.morphTargets=k.morphTargets,rt.morphNormals=k.morphNormals,rt.morphColors=k.morphColors,rt.morphTargetsCount=k.morphTargetsCount,rt.numClippingPlanes=k.numClippingPlanes,rt.numIntersection=k.numClipIntersection,rt.vertexAlphas=k.vertexAlphas,rt.vertexTangents=k.vertexTangents,rt.toneMapping=k.toneMapping}function Xl(S,k){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;b.setFromMatrixPosition(k.matrixWorld);for(let rt=0,Q=S.length;rt<Q;rt++){let K=S[rt];if(K.texture!==null&&K.boundingBox.containsPoint(b))return K}return null}function ys(S,k,rt,Q,K){k.isScene!==!0&&(k=Ge),lt.resetTextureUnits();let Dt=k.fog,Bt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?k.environment:null,Pt=st===null?C.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:pe.workingColorSpace,zt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,qt=St.get(Q.envMap||Bt,zt),le=Q.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Qt=!!rt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Et=!!rt.morphAttributes.position,_e=!!rt.morphAttributes.normal,ze=!!rt.morphAttributes.color,Ae=qn;Q.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ae=C.toneMapping);let fe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,qe=fe!==void 0?fe.length:0,Ot=j.get(Q),nn=E.state.lights;if($t===!0&&(oe===!0||S!==ot)){let Ce=S===ot&&Q.id===O;Xt.setState(Q,S,Ce)}let de=!1;Q.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==nn.state.version||Ot.outputColorSpace!==Pt||K.isBatchedMesh&&Ot.batching===!1||!K.isBatchedMesh&&Ot.batching===!0||K.isBatchedMesh&&Ot.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ot.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ot.instancing===!1||!K.isInstancedMesh&&Ot.instancing===!0||K.isSkinnedMesh&&Ot.skinning===!1||!K.isSkinnedMesh&&Ot.skinning===!0||K.isInstancedMesh&&Ot.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ot.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ot.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ot.instancingMorph===!1&&K.morphTexture!==null||Ot.envMap!==qt||Q.fog===!0&&Ot.fog!==Dt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Xt.numPlanes||Ot.numIntersection!==Xt.numIntersection)||Ot.vertexAlphas!==le||Ot.vertexTangents!==Qt||Ot.morphTargets!==Et||Ot.morphNormals!==_e||Ot.morphColors!==ze||Ot.toneMapping!==Ae||Ot.morphTargetsCount!==qe||!!Ot.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,Ot.__version=Q.version);let ke=Ot.currentProgram;de===!0&&(ke=ti(Q,k,K),H&&Q.isNodeMaterial&&H.onUpdateProgram(Q,ke,Ot));let Ze=!1,ei=!1,gi=!1,be=ke.getUniforms(),Le=Ot.uniforms;if(y.useProgram(ke.program)&&(Ze=!0,ei=!0,gi=!0),Q.id!==O&&(O=Q.id,ei=!0),Ot.needsLights){let Ce=Xl(E.state.lightProbeGridArray,K);Ot.lightProbeGrid!==Ce&&(Ot.lightProbeGrid=Ce,ei=!0)}if(Ze||ot!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),be.setValue(V,"projectionMatrix",S.projectionMatrix),be.setValue(V,"viewMatrix",S.matrixWorldInverse);let On=be.map.cameraPosition;On!==void 0&&On.setValue(V,jt.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&be.setValue(V,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&be.setValue(V,"isOrthographic",S.isOrthographicCamera===!0),ot!==S&&(ot=S,ei=!0,gi=!0)}if(Ot.needsLights&&(nn.state.sunShadowMap.length>0&&be.setValue(V,"sunShadowMap",nn.state.sunShadowMap,lt),nn.state.directionalShadowMap.length>0&&be.setValue(V,"directionalShadowMap",nn.state.directionalShadowMap,lt),nn.state.spotShadowMap.length>0&&be.setValue(V,"spotShadowMap",nn.state.spotShadowMap,lt),nn.state.pointShadowMap.length>0&&be.setValue(V,"pointShadowMap",nn.state.pointShadowMap,lt)),K.isSkinnedMesh){be.setOptional(V,K,"bindMatrix"),be.setOptional(V,K,"bindMatrixInverse");let Ce=K.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),be.setValue(V,"boneTexture",Ce.boneTexture,lt))}K.isBatchedMesh&&(be.setOptional(V,K,"batchingTexture"),be.setValue(V,"batchingTexture",K._matricesTexture,lt),be.setOptional(V,K,"batchingIdTexture"),be.setValue(V,"batchingIdTexture",K._indirectTexture,lt),be.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&be.setValue(V,"batchingColorTexture",K._colorsTexture,lt));let Mn=rt.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&z.update(K,rt,ke),(ei||Ot.receiveShadow!==K.receiveShadow)&&(Ot.receiveShadow=K.receiveShadow,be.setValue(V,"receiveShadow",K.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&k.environment!==null&&(Le.envMapIntensity.value=k.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=iy()),ei){if(be.setValue(V,"toneMappingExposure",C.toneMappingExposure),Ot.needsLights&&vs(Le,gi),Dt&&Q.fog===!0&&Yt.refreshFogUniforms(Le,Dt),Yt.refreshMaterialUniforms(Le,Q,et,q,E.state.transmissionRenderTarget[S.id]),Ot.needsLights&&Ot.lightProbeGrid){let Ce=Ot.lightProbeGrid;Le.probesSH.value=Ce.texture,Le.probesMin.value.copy(Ce.boundingBox.min),Le.probesMax.value.copy(Ce.boundingBox.max),Le.probesResolution.value.copy(Ce.resolution)}js.upload(V,po(Ot),Le,lt)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(js.upload(V,po(Ot),Le,lt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&be.setValue(V,"center",K.center),be.setValue(V,"modelViewMatrix",K.modelViewMatrix),be.setValue(V,"normalMatrix",K.normalMatrix),be.setValue(V,"modelMatrix",K.matrixWorld),Q.uniformsGroups!==void 0){let Ce=Q.uniformsGroups;for(let On=0,xi=Ce.length;On<xi;On++){let cn=Ce[On];ft.update(cn,ke),ft.bind(cn,ke)}}return ke}function vs(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.sunLights.needsUpdate=k,S.sunLightShadows.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function mo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(S,k,rt){let Q=j.get(S);Q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),j.get(S.texture).__webglTexture=k,j.get(S.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:rt,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){let rt=j.get(S);rt.__webglFramebuffer=k,rt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,rt=0){st=S,Y=k,Z=rt;let Q=null,K=!1,Dt=!1;if(S){let Pt=j.get(S);if(Pt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(V.FRAMEBUFFER,Pt.__webglFramebuffer),nt.copy(S.viewport),Mt.copy(S.scissor),dt=S.scissorTest,y.viewport(nt),y.scissor(Mt),y.setScissorTest(dt),O=-1;return}else if(Pt.__webglFramebuffer===void 0)lt.setupRenderTarget(S);else if(Pt.__hasExternalTextures)lt.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let le=S.depthTexture;if(Pt.__boundDepthTexture!==le){if(le!==null&&j.has(le)&&(S.width!==le.image.width||S.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(S)}}let zt=S.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Dt=!0);let qt=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qt[k])?Q=qt[k][rt]:Q=qt[k],K=!0):S.samples>0&&lt.useMultisampledRTT(S)===!1?Q=j.get(S).__webglMultisampledFramebuffer:Array.isArray(qt)?Q=qt[rt]:Q=qt,nt.copy(S.viewport),Mt.copy(S.scissor),dt=S.scissorTest}else nt.copy(ut).multiplyScalar(et).floor(),Mt.copy(Ft).multiplyScalar(et).floor(),dt=Jt;if(rt!==0&&(Q=U),y.bindFramebuffer(V.FRAMEBUFFER,Q)&&y.drawBuffers(S,Q),y.viewport(nt),y.scissor(Mt),y.setScissorTest(dt),K){let Pt=j.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pt.__webglTexture,rt)}else if(Dt){let Pt=k;for(let zt=0;zt<S.textures.length;zt++){let qt=j.get(S.textures[zt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+zt,qt.__webglTexture,rt,Pt)}}else if(S!==null&&rt!==0){let Pt=j.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pt.__webglTexture,rt)}O=-1};function hr(S){let k=j.get(S);return(k.__readFormat!==S.format||k.__readType!==S.type)&&(k.__readFormat=S.format,k.__readType=S.type,k.__formatReadable=R.textureFormatReadable(S.format),k.__typeReadable=R.textureTypeReadable(S.type)),k}this.readRenderTargetPixels=function(S,k,rt,Q,K,Dt,Bt,Pt=0){if(!(S&&S.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Bt!==void 0&&(zt=zt[Bt]),zt){y.bindFramebuffer(V.FRAMEBUFFER,zt);try{let qt=S.textures[Pt],le=qt.format,Qt=qt.type;S.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Pt);let Et=hr(qt);if(Et.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-Q&&rt>=0&&rt<=S.height-K&&V.readPixels(k,rt,Q,K,At.convert(le),At.convert(Qt),Dt)}finally{let qt=st!==null?j.get(st).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(S,k,rt,Q,K,Dt,Bt,Pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Bt!==void 0&&(zt=zt[Bt]),zt)if(k>=0&&k<=S.width-Q&&rt>=0&&rt<=S.height-K){y.bindFramebuffer(V.FRAMEBUFFER,zt);let qt=S.textures[Pt],le=qt.format,Qt=qt.type;S.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Pt);let Et=hr(qt);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,_e),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),V.readPixels(k,rt,Q,K,At.convert(le),At.convert(Qt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let ze=st!==null?j.get(st).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,ze);let Ae=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Nf(V,Ae,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,_e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(_e),V.deleteSync(Ae),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,rt=0){let Q=Math.pow(2,-rt),K=Math.floor(S.image.width*Q),Dt=Math.floor(S.image.height*Q),Bt=k!==null?k.x:0,Pt=k!==null?k.y:0;lt.setTexture2D(S,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,Bt,Pt,K,Dt),y.unbindTexture()},this.copyTextureToTexture=function(S,k,rt=null,Q=null,K=0,Dt=0){let Bt,Pt,zt,qt,le,Qt,Et,_e,ze,Ae=S.isCompressedTexture?S.mipmaps[Dt]:S.image;if(rt!==null)Bt=rt.max.x-rt.min.x,Pt=rt.max.y-rt.min.y,zt=rt.isBox3?rt.max.z-rt.min.z:1,qt=rt.min.x,le=rt.min.y,Qt=rt.isBox3?rt.min.z:0;else{let Le=Math.pow(2,-K);Bt=Math.floor(Ae.width*Le),Pt=Math.floor(Ae.height*Le),S.isDataArrayTexture?zt=Ae.depth:S.isData3DTexture?zt=Math.floor(Ae.depth*Le):zt=1,qt=0,le=0,Qt=0}Q!==null?(Et=Q.x,_e=Q.y,ze=Q.z):(Et=0,_e=0,ze=0);let fe=At.convert(k.format),qe=At.convert(k.type),Ot;k.isData3DTexture?(lt.setTexture3D(k,0),Ot=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(lt.setTexture2DArray(k,0),Ot=V.TEXTURE_2D_ARRAY):(lt.setTexture2D(k,0),Ot=V.TEXTURE_2D),y.activeTexture(V.TEXTURE0),y.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);let nn=y.getParameter(V.UNPACK_ROW_LENGTH),de=y.getParameter(V.UNPACK_IMAGE_HEIGHT),ke=y.getParameter(V.UNPACK_SKIP_PIXELS),Ze=y.getParameter(V.UNPACK_SKIP_ROWS),ei=y.getParameter(V.UNPACK_SKIP_IMAGES);y.pixelStorei(V.UNPACK_ROW_LENGTH,Ae.width),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ae.height),y.pixelStorei(V.UNPACK_SKIP_PIXELS,qt),y.pixelStorei(V.UNPACK_SKIP_ROWS,le),y.pixelStorei(V.UNPACK_SKIP_IMAGES,Qt);let gi=S.isDataArrayTexture||S.isData3DTexture,be=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){let Le=j.get(S),Mn=j.get(k),Ce=j.get(Le.__renderTarget),On=j.get(Mn.__renderTarget);y.bindFramebuffer(V.READ_FRAMEBUFFER,Ce.__webglFramebuffer),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let xi=0;xi<zt;xi++)gi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,j.get(S).__webglTexture,K,Qt+xi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,j.get(k).__webglTexture,Dt,ze+xi)),V.blitFramebuffer(qt,le,Bt,Pt,Et,_e,Bt,Pt,V.DEPTH_BUFFER_BIT,V.NEAREST);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||S.isRenderTargetTexture||j.has(S)){let Le=j.get(S),Mn=j.get(k);y.bindFramebuffer(V.READ_FRAMEBUFFER,I),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,B);for(let Ce=0;Ce<zt;Ce++)gi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Le.__webglTexture,K,Qt+Ce):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Le.__webglTexture,K),be?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Mn.__webglTexture,Dt,ze+Ce):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Mn.__webglTexture,Dt),K!==0?V.blitFramebuffer(qt,le,Bt,Pt,Et,_e,Bt,Pt,V.COLOR_BUFFER_BIT,V.NEAREST):be?V.copyTexSubImage3D(Ot,Dt,Et,_e,ze+Ce,qt,le,Bt,Pt):V.copyTexSubImage2D(Ot,Dt,Et,_e,qt,le,Bt,Pt);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else be?S.isDataTexture||S.isData3DTexture?V.texSubImage3D(Ot,Dt,Et,_e,ze,Bt,Pt,zt,fe,qe,Ae.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(Ot,Dt,Et,_e,ze,Bt,Pt,zt,fe,Ae.data):V.texSubImage3D(Ot,Dt,Et,_e,ze,Bt,Pt,zt,fe,qe,Ae):S.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,Et,_e,Bt,Pt,fe,qe,Ae.data):S.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,Et,_e,Ae.width,Ae.height,fe,Ae.data):V.texSubImage2D(V.TEXTURE_2D,Dt,Et,_e,Bt,Pt,fe,qe,Ae);y.pixelStorei(V.UNPACK_ROW_LENGTH,nn),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,de),y.pixelStorei(V.UNPACK_SKIP_PIXELS,ke),y.pixelStorei(V.UNPACK_SKIP_ROWS,Ze),y.pixelStorei(V.UNPACK_SKIP_IMAGES,ei),Dt===0&&k.generateMipmaps&&V.generateMipmap(Ot),y.unbindTexture()},this.initRenderTarget=function(S){j.get(S).__webglFramebuffer===void 0&&lt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?lt.setTextureCube(S,0):S.isData3DTexture?lt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?lt.setTexture2DArray(S,0):lt.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){Y=0,Z=0,st=null,y.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var sy=["top","side","bottom"],ry={slab_bottom:1,slab_top:1,stairs:1},md=[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]];function oy(n){return!n||!n.shape?null:n.shape==="slab_bottom"?[[0,0,0,1,.5,1]]:n.shape==="slab_top"?[[0,.5,0,1,1,1]]:n.shape==="stairs"?[[0,0,0,1,.5,1],md[n.facing|0]]:null}function gd(n){let t=n&&n.blocks||[],e=n&&n.items||[],i=new Array(256).fill(null),s=Object.create(null),r=[];for(let w of t){if(!w||typeof w.id!="string")throw new Error("block without id");if(!Number.isInteger(w.n)||w.n<0||w.n>255)throw new Error("bad n for "+w.id);if(i[w.n])throw new Error("duplicate n "+w.n+" ("+w.id+")");if(s[w.id])throw new Error("duplicate id "+w.id);let C=w.colors||{},N=Object.assign({solid:!0,transparent:!1,liquid:!1,emissive:!1,hardness:1,drops:"self",buy:null,maxStack:64,pattern:"plain",kind:"block"},w);if(N.placeable=N.n!==0&&!N.liquid,N.colors={top:C.top||"#888888",side:C.side||C.top||"#888888",bottom:C.bottom||C.top||"#888888"},N.opaque=N.solid&&!N.transparent&&!N.cutout&&!ry[N.shape],N.tile={},N.tileOf&&s[N.tileOf])N.tile=Object.assign({},s[N.tileOf].tile);else if(N.n!==0){let H={};for(let U of sy){let I=N.colors[U]+"|"+(N.pattern==="grass"||N.pattern==="log"||N.pattern==="lamp"||N.pattern==="table"||N.pattern==="stele"||N.pattern==="torch"||N.pattern==="bed"||N.pattern==="snow"||N.pattern==="lantern"||N.pattern==="bookshelf"||N.pattern==="hay"||N.pattern==="barrel"||N.pattern==="chest"||N.pattern==="farmland"?U:"");H[I]===void 0&&(H[I]=r.length,r.push({block:N.id,face:U,color:N.colors[U],pattern:N.pattern,accent:N.accent||null,top:N.colors.top})),N.tile[U]=H[I]}}i[N.n]=N,s[N.id]=N}if(!s.air)throw new Error("registry needs air");for(let w of e){if(s[w.id])throw new Error("duplicate id "+w.id);s[w.id]=Object.assign({kind:"item",placeable:!1,maxStack:64,buy:null},w)}for(let w in s){let C=s[w].drops;if(C&&C!=="self"&&!s[C])throw new Error(w+" drops unknown "+C)}let o=w=>(typeof w=="number"?i[w]:s[w])||null,a=new Uint8Array(256),l=new Uint8Array(256),c=new Uint8Array(256),u=new Uint8Array(256),h=new Uint8Array(256),f=new Uint8Array(256),m={torch:1,cross:2,small:3,carpet:4,slab_bottom:5,slab_top:6,stairs:7},x=new Uint8Array(256),v=new Array(256).fill(null),d=new Uint8Array(256),p=new Uint8Array(256),A=new Uint8Array(256),L=new Uint8Array(256),b=new Uint8Array(256),T=new Int16Array(256).fill(-1),E=new Int16Array(256).fill(-1),D=new Int16Array(256).fill(-1);i.forEach((w,C)=>{w&&(d[C]=w.solid?1:0,p[C]=w.opaque?1:0,A[C]=w.transparent?1:0,L[C]=w.emissive?1:0,b[C]=w.liquid?1:0,a[C]=w.light!=null?w.light:w.emissive?15:0,l[C]=w.liquid?2:0,c[C]=m[w.shape]||0,u[C]=w.cutout?1:0,h[C]=w.climbable?1:0,f[C]=w.plant?1:0,x[C]=w.facing|0,w.solid&&(v[C]=oy(w)),C&&(T[C]=w.tile.top,E[C]=w.tile.side,D[C]=w.tile.bottom))});let M=(n&&n.blueprints||[]).map(w=>Object.assign({kind:"blueprint"},w));return{blocks:i.filter(Boolean),items:e.map(w=>s[w.id]),blueprints:M,tiles:r,get:o,toolOf:w=>{let C=w&&s[w];return C&&C.kind==="item"&&C.tool&&typeof C.tool=="object"?C.tool:null},num:w=>{let C=s[w];if(!C||C.kind!=="block")throw new Error("no block "+w);return C.n},name:w=>{let C=o(w);return C?C.name_zh:String(w)},maxStack:w=>{let C=s[w];return C?C.maxStack:64},dropOf:w=>{let C=i[w];return!C||!C.drops?null:C.drops==="self"?C.id:C.drops},breakTime:w=>{let C=i[w];return!C||C.hardness<0?1/0:.25+C.hardness*.55},flat:{solid:d,opaque:p,trans:A,emit:L,liquid:b,tileTop:T,tileSide:E,tileBottom:D,lightEmit:a,attn:l,shape:c,cutout:u,climb:h,plant:f,facing:x,boxes:v}}}var Ti=n=>Math.floor(n/16);var Se=(n,t,e)=>(t*16+e)*16+n;var fs=(n,t)=>n+","+t;function yh(n,t,e){if(n=Math.floor(n),t=Math.floor(t),e=Math.floor(e),t<0||t>=64)return null;let i=Ti(n),s=Ti(e);return{cx:i,cz:s,i:Se(n-i*16,t,e-s*16)}}function xd(n,t,e){let i=[];for(let s=-e;s<=e;s++)for(let r=-e;r<=e;r++){let o=r*r+s*s;o<=e*e+e&&i.push({cx:n+r,cz:t+s,d2:o})}return i.sort((s,r)=>s.d2-r.d2)}function Jn(n,t,e,i){let s=(n|0)^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(i|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}var tr=(n,t,e)=>Jn(n,t,0,e);function ay(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var vh=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],ly=.5*(Math.sqrt(3)-1),jr=(3-Math.sqrt(3))/6;function ds(n){let t=ay(n),e=new Uint8Array(256);for(let s=0;s<256;s++)e[s]=s;for(let s=255;s>0;s--){let r=Math.floor(t()*(s+1)),o=e[s];e[s]=e[r],e[r]=o}let i=new Uint8Array(512);for(let s=0;s<512;s++)i[s]=e[s&255];return function(s,r){let o=(s+r)*ly,a=Math.floor(s+o),l=Math.floor(r+o),c=(a+l)*jr,u=s-(a-c),h=r-(l-c),f=u>h?1:0,m=1-f,x=u-f+jr,v=h-m+jr,d=u-1+2*jr,p=h-1+2*jr,A=a&255,L=l&255,b=0,T,E;return T=.5-u*u-h*h,T>0&&(E=vh[i[A+i[L]]&7],T*=T,b+=T*T*(E[0]*u+E[1]*h)),T=.5-x*x-v*v,T>0&&(E=vh[i[A+f+i[L+m]]&7],T*=T,b+=T*T*(E[0]*x+E[1]*v)),T=.5-d*d-p*p,T>0&&(E=vh[i[A+1+i[L+1]]&7],T*=T,b+=T*T*(E[0]*d+E[1]*p)),70*b}}function ps(n,t,e,i){let s=1,r=1,o=0,a=0;for(let l=0;l<i;l++)o+=s*n(t*r,e*r),a+=s,s*=.5,r*=2;return o/a}function Mh(n){let t=e=>e*e*(3-2*e);return function(e,i,s){let r=Math.floor(e),o=Math.floor(i),a=Math.floor(s),l=t(e-r),c=t(i-o),u=t(s-a),h=(m,x,v)=>Jn(n,r+m,o+x,a+v),f=(m,x,v)=>m+(x-m)*v;return f(f(f(h(0,0,0),h(1,0,0),l),f(h(0,1,0),h(1,1,0),l),c),f(f(h(0,0,1),h(1,0,1),l),f(h(0,1,1),h(1,1,1),l),c),u)}}var er=160,Kn=18,Sh=[[0,1],[-1,0],[0,-1],[1,0]];function _d(n,t,e,i,s){return s===1?[i-1-t,n]:s===2?[e-1-n,i-1-t]:s===3?[t,e-1-n]:[n,t]}var cy=(n,t,e)=>e&1?[t,n]:[n,t];function yd(n,t,e){let i=new Map,s=t.SEA,r=e&&e.templates||{};function o(l,c){let u=l+","+c;if(i.has(u))return i.get(u);let h=null,f=m=>Jn(n+909,l,m,c);if(f(0)<.45&&e&&e.houses&&e.houses.length){let m=Math.floor((l+.2+f(1)*.6)*er),x=Math.floor((c+.2+f(2)*.6)*er),v=t.biomeOf(m,x),d=t.height(m,x),p=(v==="plains"||v==="desert")&&Math.hypot(m,x)>110;if(p&&d>s+1)for(let A=0;A<16&&p;A++)for(let L of[7,14]){let b=t.height(m+Math.round(Math.cos(A*.39)*L),x+Math.round(Math.sin(A*.39)*L));(Math.abs(b-d)>3||b<=s)&&(p=!1)}else p=!1;if(p){let A=[],L=[],b=3+Math.floor(f(3)*4),T=(E,D,M,w)=>{let C=r[E];if(!C)return null;let[N,H]=cy(C.size[0],C.size[2],w),U={tpl:E,rot:w,x0:D-(N>>1),z0:M-(H>>1),y:d,w:N,d:H,h:C.size[1]};return A.push(U),U};T("well",m,x,0),T("lamp_post",m+3,x+3,0),T("lamp_post",m-3,x-3,0);for(let E=0;E<b;E++){let D=E/b*Math.PI*2+f(10+E)*.5,M=9+f(20+E)*3,w=m+Math.round(Math.cos(D)*M),C=x+Math.round(Math.sin(D)*M),N=m-w,H=x-C,U=0,I=-1/0;Sh.forEach((nt,Mt)=>{let dt=nt[0]*N+nt[1]*H;dt>I&&(I=dt,U=Mt)});let B=e.houses[Math.floor(f(30+E)*e.houses.length)],Y=T(B,w,C,U);if(!Y)continue;let Z=r[B],[st,O]=_d(Z.door[0],Z.door[1],Z.size[0],Z.size[2],U),ot={x:Y.x0+st+Sh[U][0],z:Y.z0+O+Sh[U][1]};L.push({ax:m,az:x,bx:ot.x,bz:ot.z})}h={id:u,x:m,z:x,y:d,biome:v,structures:A,paths:L,villagers:2+Math.floor(f(4)*3)}}}return i.set(u,h),h}function a(l,c,u,h){let f=[];for(let m=Math.floor((c-Kn)/er);m<=Math.floor((h+Kn)/er);m++)for(let x=Math.floor((l-Kn)/er);x<=Math.floor((u+Kn)/er);x++){let v=o(x,m);v&&v.x+Kn>=l&&v.x-Kn<=u&&v.z+Kn>=c&&v.z-Kn<=h&&f.push(v)}return f}return{plan:o,around:a,chunk:(l,c)=>a(l*16,c*16,l*16+16-1,c*16+16-1)}}function vd(n,t,e,i,s,r,o){let a=t*16,l=e*16,c=(x,v)=>x>=a&&x<a+16&&v>=l&&v<l+16,u=i.biome==="desert",h=u?s.desert||{}:{},f=x=>{let v=s.palette[x];if(!v)return null;let d=h[v]||v;return r.byId(d)},m=u?r.byId("sandstone"):r.byId("cobblestone");for(let x of i.paths){let v=Math.max(Math.abs(x.bx-x.ax),Math.abs(x.bz-x.az));for(let d=0;d<=v;d++){let p=Math.round(x.ax+(x.bx-x.ax)*d/v),A=Math.round(x.az+(x.bz-x.az)*d/v);if(!c(p,A))continue;let L=o.height(p,A),b=Se(p-a,L,A-l);n[b]&&n[b]!==r.water&&(n[b]=r.path);for(let T=L+1;T<Math.min(64,L+4);T++){let E=Se(p-a,T,A-l);(n[E]===r.leaves||n[E]===r.log||T===L+1)&&(n[E]=0)}}}for(let x of i.structures){let v=s.templates[x.tpl];if(!v)continue;let[d,,p]=v.size;for(let A=0;A<p;A++)for(let L=0;L<d;L++){let[b,T]=_d(L,A,d,p,x.rot),E=x.x0+b,D=x.z0+T;if(!c(E,D))continue;let M=E-a,w=D-l;for(let C=x.y-1;C>Math.max(0,x.y-8);C--){let N=Se(M,C,w);if(n[N]&&n[N]!==r.water)break;n[N]=m}for(let C=x.y+v.size[1];C<Math.min(64,x.y+v.size[1]+3);C++)n[Se(M,C,w)]=0;v.layers.forEach((C,N)=>{let H=(C[A]||"")[L];if(!H||H===" ")return;let U=x.y+N;U>=64||(n[Se(M,U,w)]=H==="."?0:f(H)||0)})}}}var bn=24;var Sd={ocean:"\u6D77\u6D0B",plains:"\u8349\u539F",forest:"\u68EE\u6797",desert:"\u6C99\u6F20",snow:"\u96EA\u5730"},Md=[{ore:"coal",y0:5,y1:55,count:12,chance:1,size:7},{ore:"iron",y0:4,y1:40,count:8,chance:1,size:5},{ore:"gold",y0:3,y1:24,count:3,chance:.8,size:4},{ore:"diamond",y0:2,y1:13,count:2,chance:.6,size:3}],nr=112;function bd(n,t,e){let i=U=>t.num(U),s=U=>{try{return i(U)}catch{return 0}},r={air:0,grass:i("grass"),dirt:i("dirt"),stone:i("stone"),sand:i("sand"),water:i("water"),log:i("log"),leaves:i("leaves"),coal:i("coal_ore"),iron:i("iron_ore"),ruby:i("ruby_ore"),gold:i("gold_ore"),diamond:i("diamond_ore"),bedrock:i("bedrock"),stele:i("stele")};Object.assign(r,{portal:s("portal_forest"),sandstone:s("sandstone")||r.stone,cactus:s("cactus"),snow:s("snow")||r.grass,ice:s("ice")||r.water,slog:s("spruce_log")||r.log,sleaves:s("spruce_leaves")||r.leaves}),r.path=s("path")||r.dirt,r.byId=s;let o=["flower_rose","flower_marigold","flower_dandelion","flower_hydrangea","flower_cornflower","flower_lavender","flower_peony"].map(s).filter(Boolean);Object.assign(r,{tallgrass:s("tallgrass"),fern:s("fern"),deadbush:s("deadbush"),mushR:s("mushroom_red"),mushB:s("mushroom_brown")});let a=ds(n),l=ds(n+101),c=ds(n+202),u=ds(n+303),h=ds(n+404),f=Mh(n+505),m=Mh(n+606);function x(U,I){let B=ps(a,U/190,I/190,3),Y=ps(l,U/55,I/55,4),Z=Math.max(0,ps(c,U/130,I/130,2)-.1),st=27+B*9+Y*6+Z*Z*75;return Math.max(4,Math.min(54,Math.floor(st)))}let v=ds(n+808);function d(U,I){let B=x(U,I),Y=ps(v,U/900,I/900,2),Z=Math.min(1,Math.max(0,(Math.hypot(U,I)-240)/80)),st=Math.min(1,Math.max(0,(-.18-Y)/.17)),O=st*st*(3-2*st)*Z;return O>0&&(B=Math.round(B*(1-O)+(bn-14)*O)),B<bn-1?Math.max(3,Math.floor(bn-1-(bn-1-B)*1.8)):B}function p(U,I){let B=(tr(n+3,U,I)-.5)*.025;return{t:ps(u,U/420,I/420,2)+B,u:ps(h,U/380,I/380,2)-B}}function A(U,I,B=d(U,I)){if(B<bn-1)return"ocean";let{t:Y,u:Z}=p(U,I);return Y<-.3?"snow":Y>.28&&Z<.05?"desert":Z>.12?"forest":"plains"}let L=null;function b(){if(L)return L;let U=(I,B)=>{let Y=d(I,B);return Y>=bn+2&&Math.abs(d(I+1,B)-Y)<2&&Math.abs(d(I,B+1)-Y)<2};for(let I=0;I<400;I+=2)for(let B=0;B<Math.max(1,I*2);B++){let Y=B/Math.max(1,I*2)*Math.PI*2,Z=Math.round(Math.cos(Y)*I),st=Math.round(Math.sin(Y)*I);if(U(Z,st)&&U(Z+3,st+2))return L={x:Z+.5,y:d(Z,st)+1,z:st+.5,stele:{x:Z+3,y:d(Z+3,st+2)+1,z:st+2},portal:{x:Z-3,y:Math.max(bn+1,d(Z-3,st+2))+1,z:st+2}},L}return L={x:.5,y:60,z:.5,stele:{x:3,y:58,z:2}},L}function T(U,I){let B=[],Y=U*16,Z=I*16,st=Math.floor((Y-80)/nr),O=Math.floor((Y+16+80)/nr),ot=Math.floor((Z-80)/nr),nt=Math.floor((Z+16+80)/nr);for(let Mt=ot;Mt<=nt;Mt++)for(let dt=st;dt<=O;dt++){let yt=pt=>Jn(n+707,dt,pt,Mt);if(yt(0)>.25)continue;let bt=(dt+yt(1))*nr,xt=(Mt+yt(2))*nr,q=yt(3)*Math.PI,et=40+yt(4)*30;B.push({ax:bt-Math.cos(q)*et/2,az:xt-Math.sin(q)*et/2,dx:Math.cos(q)*et,dz:Math.sin(q)*et,len:et,floor:7+Math.floor(yt(5)*6),w:1.6+yt(6)*1.2})}return B}function E(U,I){let B=new Uint8Array(16384),Y=U*16,Z=I*16,st=18,O=new Int16Array(st*st);for(let bt=-1;bt<=16;bt++)for(let xt=-1;xt<=16;xt++)O[(bt+1)*st+xt+1]=d(Y+xt,Z+bt);let ot=b(),nt=new Array(256);for(let bt=0;bt<16;bt++)for(let xt=0;xt<16;xt++){let q=Y+xt,et=Z+bt,pt=O[(bt+1)*st+xt+1],Lt=Math.max(Math.abs(O[(bt+1)*st+xt]-pt),Math.abs(O[(bt+1)*st+xt+2]-pt),Math.abs(O[bt*st+xt+1]-pt),Math.abs(O[(bt+2)*st+xt+1]-pt))>=3,ut=nt[bt*16+xt]=A(q,et,pt),Ft=pt<=bn+1,Jt,Gt;ut==="ocean"||Ft||ut==="desert"?(Jt=r.sand,Gt=r.sand):Lt?(Jt=r.stone,Gt=r.stone):ut==="snow"?(Jt=r.snow,Gt=r.dirt):(Jt=r.grass,Gt=r.dirt);for(let $t=0;$t<=pt;$t++){let oe;if($t===0?oe=r.bedrock:$t===pt?oe=Jt:$t>=pt-3?oe=Gt:ut==="desert"&&$t>=pt-7?oe=r.sandstone:oe=r.stone,oe===r.stone&&Lt&&$t>=pt-4){let Wt=Jn(n,q,$t,et);Wt<.06?oe=r.coal:Wt<.09?oe=r.iron:Wt<.096&&(oe=r.ruby)}B[Se(xt,$t,bt)]=oe}for(let $t=pt+1;$t<=bn;$t++)B[Se(xt,$t,bt)]=$t===bn&&ut==="snow"?r.ice:r.water}D(B,U,I,O,st);for(let bt=0;bt<Md.length;bt++){let xt=Md[bt],q=r[xt.ore];for(let et=0;et<xt.count;et++){let pt=Jt=>Jn(n+31*bt+Jt,U*977+et,Jt,I*131+et);if(pt(9)>xt.chance)continue;let Lt=Math.floor(pt(1)*16),ut=xt.y0+Math.floor(pt(2)*(xt.y1-xt.y0)),Ft=Math.floor(pt(3)*16);for(let Jt=0;Jt<xt.size;Jt++){Lt>=0&&Lt<16&&Ft>=0&&Ft<16&&ut>0&&ut<64&&B[Se(Lt,ut,Ft)]===r.stone&&(B[Se(Lt,ut,Ft)]=q);let Gt=Math.floor(pt(10+Jt)*6);Gt===0?Lt++:Gt===1?Lt--:Gt===2?ut++:Gt===3?ut--:Gt===4?Ft++:Ft--}}}let Mt=e?H.chunk(U,I):[];M(B,U,I,O,st,nt,ot,Mt);for(let bt of Mt)vd(B,U,I,bt,e,r,N);let dt=ot.stele;if(Math.floor(dt.x/16)===U&&Math.floor(dt.z/16)===I){let bt=dt.x-Y,xt=dt.z-Z;B[Se(bt,dt.y,xt)]=r.stele,B[Se(bt,dt.y+1,xt)]=r.stele}let yt=ot.portal;if(r.portal&&yt&&Math.floor(yt.x/16)===U&&Math.floor(yt.z/16)===I){let bt=yt.x-Y,xt=yt.z-Z;for(let q=Math.max(1,yt.y-3);q<yt.y;q++)(!B[Se(bt,q,xt)]||B[Se(bt,q,xt)]===r.water)&&(B[Se(bt,q,xt)]=r.stone);B[Se(bt,yt.y,xt)]=r.portal,B[Se(bt,yt.y+1,xt)]=r.portal}return B}function D(U,I,B,Y,Z){let st=I*16,O=B*16,ot=4,nt=16/ot+1,Mt=64/ot+1,dt=new Float32Array(nt*nt*Mt);for(let xt=0;xt<Mt;xt++)for(let q=0;q<nt;q++)for(let et=0;et<nt;et++){let pt=st+et*ot,Lt=xt*ot,ut=O+q*ot,Ft=f(pt/22,Lt/14,ut/22)-.5,Jt=m(pt/22,Lt/14,ut/22)-.5;dt[(xt*nt+q)*nt+et]=Ft*Ft+Jt*Jt}let yt=(xt,q,et)=>dt[(q*nt+et)*nt+xt],bt=T(I,B);for(let xt=0;xt<16;xt++)for(let q=0;q<16;q++){let et=Y[(xt+1)*Z+q+1],pt=et<=bn+1,Lt=pt?et-5:et,ut=q>>2,Ft=xt>>2,Jt=(q&3)/ot,Gt=(xt&3)/ot;for(let Wt=3;Wt<=Lt;Wt++){let jt=Wt>>2,ye=(Wt&3)/ot,Ge=yt(ut,jt,Ft)+(yt(ut+1,jt,Ft)-yt(ut,jt,Ft))*Jt,Me=yt(ut,jt,Ft+1)+(yt(ut+1,jt,Ft+1)-yt(ut,jt,Ft+1))*Jt,Ee=yt(ut,jt+1,Ft)+(yt(ut+1,jt+1,Ft)-yt(ut,jt+1,Ft))*Jt,V=yt(ut,jt+1,Ft+1)+(yt(ut+1,jt+1,Ft+1)-yt(ut,jt+1,Ft+1))*Jt;if((Ge+(Me-Ge)*Gt)*(1-ye)+(Ee+(V-Ee)*Gt)*ye<.008){let me=Se(q,Wt,xt);U[me]!==r.bedrock&&U[me]!==r.water&&(U[me]=0)}}if(!bt.length||pt)continue;let $t=st+q,oe=O+xt;for(let Wt of bt){let jt=Math.max(0,Math.min(1,(($t-Wt.ax)*Wt.dx+(oe-Wt.az)*Wt.dz)/(Wt.len*Wt.len))),ye=Wt.ax+Wt.dx*jt,Ge=Wt.az+Wt.dz*jt,Me=Math.hypot($t-ye,oe-Ge),Ee=Wt.w*Math.sin(Math.PI*jt);if(Me<Ee)for(let V=Wt.floor+Math.floor(Me*2);V<=et;V++){let Ne=Se(q,V,xt);U[Ne]!==r.water&&(U[Ne]=0)}}}}function M(U,I,B,Y,Z,st,O,ot){let nt=I*16,Mt=B*16;for(let dt=0;dt<16;dt++)for(let yt=0;yt<16;yt++){let bt=nt+yt,xt=Mt+dt,q=Y[(dt+1)*Z+yt+1],et=st[dt*16+yt];if(q+1>=64||Math.hypot(bt-O.x,xt-O.z)<48)continue;let pt=U[Se(yt,q,dt)],Lt=Se(yt,q+1,dt);if(U[Lt])continue;let ut=tr(n+11,bt,xt),Ft=tr(n+13,bt,xt);pt===r.grass?ut<.012&&o.length?U[Lt]=o[Math.floor(Ft*o.length)]:ut<(et==="plains"?.1:.05)&&r.tallgrass?U[Lt]=r.tallgrass:et==="forest"&&ut<.08&&r.fern?U[Lt]=r.fern:et==="forest"&&ut<.084&&r.mushR&&(U[Lt]=Ft<.5?r.mushR:r.mushB):pt===r.sand&&et==="desert"&&q>bn+1&&ut<.008&&r.deadbush&&(U[Lt]=r.deadbush)}for(let dt=2;dt<14;dt++)for(let yt=2;yt<14;yt++){let bt=nt+yt,xt=Mt+dt,q=Y[(dt+1)*Z+yt+1],et=st[dt*16+yt],pt=U[Se(yt,q,dt)];if(Math.abs(bt-O.x)<7&&Math.abs(xt-O.z)<7||ot.some(Jt=>Math.abs(bt-Jt.x)<Kn+2&&Math.abs(xt-Jt.z)<Kn+2))continue;let Lt=tr(n+7,bt,xt),ut=tr(n+9,bt,xt);if(et==="desert"&&pt===r.sand&&q>bn+1&&Lt<.008&&r.cactus){let Jt=1+Math.floor(ut*3);for(let Gt=q+1;Gt<=q+Jt&&Gt<64;Gt++)U[Se(yt,Gt,dt)]=r.cactus;continue}if(et==="snow"&&pt===r.snow&&Lt<.02){C(U,yt,dt,q,5+Math.floor(ut*3));continue}let Ft=et==="forest"?.035:et==="plains"?.003:0;pt===r.grass&&Lt<Ft&&w(U,yt,dt,q,bt,xt,4+Math.floor(ut*2))}}function w(U,I,B,Y,Z,st,O){let ot=Y+O;if(!(ot+2>=64)){for(let nt=ot-2;nt<=ot+1;nt++){let Mt=nt>=ot?1:2;for(let dt=-Mt;dt<=Mt;dt++)for(let yt=-Mt;yt<=Mt;yt++){if(Mt===2&&Math.abs(yt)===2&&Math.abs(dt)===2&&Jn(n,Z+yt,nt,st+dt)<.6)continue;let bt=Se(I+yt,nt,B+dt);U[bt]===r.air&&(U[bt]=r.leaves)}}U[Se(I,Y,B)]=r.dirt;for(let nt=Y+1;nt<=ot;nt++)U[Se(I,nt,B)]=r.log}}function C(U,I,B,Y,Z){let st=Y+Z;if(!(st+2>=64)){for(let O=Y+2;O<=st+1;O++){let ot=st+1-O,nt=ot>=4?2:ot>=1?1:0;for(let Mt=-nt;Mt<=nt;Mt++)for(let dt=-nt;dt<=nt;dt++){if(nt===2&&Math.abs(dt)+Math.abs(Mt)>3)continue;let yt=Se(I+dt,O,B+Mt);U[yt]===r.air&&(U[yt]=r.sleaves)}}U[Se(I,Y,B)]=r.dirt;for(let O=Y+1;O<=st;O++)U[Se(I,O,B)]=r.slog}}let N={height:d,baseHeight:x,biomeOf:A,climate:p,genChunk:E,findSpawn:b,SEA:bn},H=yd(n,N,e);return N.villages=H,N}function bh(n,t,e,i,s,r,o){let a=i/2,l=n-a,c=n+a,u=t,h=t+s,f=e-a,m=e+a,x=Math.floor(l),v=Math.floor(c-1e-6),d=Math.floor(u),p=Math.floor(h-1e-6),A=Math.floor(f),L=Math.floor(m-1e-6),b=!1;for(let T=d;T<=p;T++)for(let E=A;E<=L;E++)for(let D=x;D<=v;D++){let M=r(D,T,E);if(!M)continue;let w=M===!0?uy:M;for(let C of w){let N=D+C[0],H=T+C[1],U=E+C[2],I=D+C[3],B=T+C[4],Y=E+C[5];if(!(I<=l+1e-6||N>=c-1e-6||B<=u+1e-6||H>=h-1e-6||Y<=f+1e-6||U>=m-1e-6)){if(!o)return!0;b=!0,o.push([N,H,U,I,B,Y])}}}return b}var uy=[[0,0,0,1,1,1]],El=(n,t,e,i,s,r)=>bh(n,t,e,i,s,r,null);function Tl(n,t,e,i,s={}){let r=s.w||.6,o=s.h||1.8,a=!!s.canStep,l=r/2,c=!1,u=0,h=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z))*e,f=Math.max(1,Math.ceil(h/.3)),m=e/f,x=[];for(let v=0;v<f;v++){let d=t.y*m;d&&(x.length=0,bh(n.x,n.y+d,n.z,r,o,i,x)?(d<0?(n.y=Math.max(...x.map(p=>p[4])),c=!0):n.y=Math.min(...x.map(p=>p[1]))-o,t.y=0):n.y+=d);for(let p of["x","z"]){let A=t[p]*m;if(!A)continue;let L={x:n.x,y:n.y,z:n.z};if(L[p]+=A,x.length=0,!bh(L.x,L.y,L.z,r,o,i,x)){n[p]=L[p];continue}if(a&&(c||s.grounded)){let T=Math.max(...x.map(E=>E[4]));if(T-n.y>0&&T-n.y<=1.01&&!El(L.x,T,L.z,r,o,i)&&!El(n.x,T,n.z,r,o,i)){u+=T-n.y,n.y=T,n[p]=L[p];continue}}let b=p==="x"?0:2;n[p]=A>0?Math.min(...x.map(T=>T[b]))-l-1e-4:Math.max(...x.map(T=>T[b+3]))+l+1e-4,El(n.x,n.y,n.z,r,o,i)&&(n[p]=L[p]-A),t[p]=0}}return!c&&t.y<=0&&El(n.x,n.y-.02,n.z,r,o,i)&&(c=!0),{onGround:c,stepped:u}}function fy(n,t,e,i,s,r){let o=[n.x,n.y,n.z],a=[t.x,t.y,t.z],l=null;for(let c of r){let u=[e+c[0],i+c[1],s+c[2]],h=[e+c[3],i+c[4],s+c[5]],f=0,m=1/0,x=-1,v=!0;for(let d=0;d<3&&v;d++){if(Math.abs(a[d])<1e-12){(o[d]<u[d]||o[d]>h[d])&&(v=!1);continue}let p=(u[d]-o[d])/a[d],A=(h[d]-o[d])/a[d];p>A&&([p,A]=[A,p]),p>f&&(f=p,x=d),A<m&&(m=A),f>m&&(v=!1)}if(v&&(!l||f<l.t)){let d=[0,0,0];x>=0&&(d[x]=-Math.sign(a[x])),l={t:f,face:x>=0?d:null}}}return l}function Al(n,t,e,i,s,r){let o=Math.floor(n.x),a=Math.floor(n.y),l=Math.floor(n.z),c=Math.sign(t.x),u=Math.sign(t.y),h=Math.sign(t.z),f=c?Math.abs(1/t.x):1/0,m=u?Math.abs(1/t.y):1/0,x=h?Math.abs(1/t.z):1/0,v=c?(c>0?o+1-n.x:n.x-o)*f:1/0,d=u?(u>0?a+1-n.y:n.y-a)*m:1/0,p=h?(h>0?l+1-n.z:n.z-l)*x:1/0,A=[0,0,0],L=0;for(;L<=e;){let b=i(o,a,l);if(b&&s(b)){let T=r&&r(b);if(!T)return{x:o,y:a,z:l,n:b,face:A,dist:L};let E=fy(n,t,o,a,l,T);if(E&&E.t<=e)return{x:o,y:a,z:l,n:b,face:E.face||A,dist:E.t}}v<d&&v<p?(o+=c,L=v,v+=f,A=[-c,0,0]):d<p?(a+=u,L=d,d+=m,A=[0,-u,0]):(l+=h,L=p,p+=x,A=[0,0,-h])}return null}var Ch={};Ms(Ch,{HOTBAR:()=>wh,SIZE:()=>Cl,add:()=>vn,canAdd:()=>eo,count:()=>jn,craft:()=>Th,craftable:()=>Il,createInventory:()=>Qr,deserialize:()=>Rl,moveBetween:()=>Ah,moveSlot:()=>Eh,remove:()=>to,serialize:()=>no,takeFromSlot:()=>ms});var Cl=36,wh=9;function Qr(n=36){return{slots:new Array(n).fill(null)}}function vn(n,t,e,i=()=>64){let s=i(t);for(let r=0;r<n.slots.length&&e>0;r++){let o=n.slots[r];if(o&&o.id===t&&o.count<s){let a=Math.min(e,s-o.count);o.count+=a,e-=a}}for(let r=0;r<n.slots.length&&e>0;r++)if(!n.slots[r]){let o=Math.min(e,s);n.slots[r]={id:t,count:o},e-=o}return e}function jn(n,t){return n.slots.reduce((e,i)=>e+(i&&i.id===t?i.count:0),0)}function to(n,t,e){if(jn(n,t)<e)return!1;for(let i=n.slots.length-1;i>=0&&e>0;i--){let s=n.slots[i];if(s&&s.id===t){let r=Math.min(e,s.count);s.count-=r,e-=r,s.count||(n.slots[i]=null)}}return!0}function ms(n,t,e=1){let i=n.slots[t];if(!i||i.count<e)return null;i.count-=e;let s=i.id;return i.count||(n.slots[t]=null),s}function Eh(n,t,e,i=()=>64){if(t===e)return;let s=n.slots[t],r=n.slots[e];if(s&&r&&s.id===r.id){let o=Math.min(s.count,i(s.id)-r.count);r.count+=o,s.count-=o,s.count||(n.slots[t]=null);return}n.slots[t]=r,n.slots[e]=s}function eo(n,t,e,i=()=>64){let s={slots:n.slots.map(r=>r&&{...r})};return vn(s,t,e,i)===0}var no=n=>n.slots.map(t=>t?Number.isFinite(t.dur)?[t.id,t.count,t.dur]:[t.id,t.count]:0);function Rl(n,t=36){let e=Qr(t);return(n||[]).slice(0,t).forEach((i,s)=>{Array.isArray(i)&&typeof i[0]=="string"&&i[1]>0&&(e.slots[s]={id:i[0],count:i[1]|0},Number.isFinite(i[2])&&(e.slots[s].dur=i[2]))}),e}function Il(n,t,e={}){if(t.blueprint&&!(e.owned&&e.owned.has(t.blueprint)))return{ok:!1,reason:"blueprint"};if(t.needs&&!(e.near&&e.near.has(t.needs)))return{ok:!1,reason:"needs"};for(let i in t.in)if(jn(n,i)<t.in[i])return{ok:!1,reason:"materials"};return{ok:!0}}function Th(n,t,e=()=>64,i){let s=Il(n,t,i||{near:new Set([t.needs]),owned:new Set([t.blueprint])});if(!s.ok)return s;let r=n.slots.map(o=>o&&{...o});for(let o in t.in)to(n,o,t.in[o]);return vn(n,t.out.id,t.out.count,e)>0?(n.slots=r,{ok:!1,reason:"full"}):{ok:!0}}function Ah(n,t,e,i,s=()=>64){let r=n.slots[t],o=e.slots[i];if(r&&o&&r.id===o.id){let a=Math.min(r.count,s(r.id)-o.count);o.count+=a,r.count-=a,r.count||(n.slots[t]=null);return}n.slots[t]=o,e.slots[i]=r}function dy(n=0){return{coins:n|0,earned:0,spent:0,owned:[]}}var ir=(n,t)=>n.owned.includes(t),wd=(n,t)=>n?t?2:1:0;function gs(n,t){return t=Math.max(0,t|0),n.coins+=t,n.earned+=t,n.coins}function io(n,t){return t=Math.max(0,t|0),n.coins<t?!1:(n.coins-=t,n.spent+=t,!0)}function Ed(n){return n.blocks.concat(n.items).filter(t=>t&&t.buy).map(t=>({id:t.id,name_zh:t.name_zh,qty:t.buy.qty||1,price:t.buy.price|0,locked:t.buy.locked||null})).concat((n.blueprints||[]).map(t=>({id:t.id,name_zh:t.name_zh,qty:1,price:t.price|0,locked:t.locked||null,blueprint:!0,desc:t.desc||""})))}function Td(n,t,e,i=()=>64){return e?e.locked?{ok:!1,reason:"locked"}:e.blueprint&&ir(n,e.id)?{ok:!1,reason:"owned"}:n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?(io(n,e.price),n.owned.push(e.id),{ok:!0}):eo(t,e.id,e.qty,i)?(io(n,e.price),vn(t,e.id,e.qty,i),{ok:!0}):{ok:!1,reason:"full"}:{ok:!1,reason:"missing"}}var Ad=n=>({coins:n.coins,earned:n.earned,spent:n.spent,owned:n.owned.slice()});function Cd(n){let t=dy(n&&n.coins);return n&&(t.earned=n.earned|0,t.spent=n.spent|0,t.owned=Array.isArray(n.owned)?n.owned.slice():[]),t}function my(){return new Map}function Rd(n,t,e,i){let s=n.get(t);s||(s=new Map,n.set(t,s)),s.set(e,i)}function Rh(n){let t=new Array(n.size*2),e=0;for(let[i,s]of n)t[e++]=i,t[e++]=s;return t}function gy(n){let t=new Map;for(let e=0;e+1<(n||[]).length;e+=2)t.set(n[e]|0,n[e+1]|0);return t}function Id(n){let t=my();for(let e in n||{})t.set(e,gy(n[e]));return t}var Pl=16;var Wb=18;var Ci=32;function Pd(n){let t=n>>>0||7;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Xe=n=>[parseInt(n.slice(1,3),16),parseInt(n.slice(3,5),16),parseInt(n.slice(5,7),16)],vt=(n,t=1,e=1)=>`rgba(${Math.round(Math.min(255,n[0]*t))},${Math.round(Math.min(255,n[1]*t))},${Math.round(Math.min(255,n[2]*t))},${e})`;function xy(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}function ne(n,t){n.beginPath(),n.moveTo(t[0][0],t[0][1]);for(let e=1;e<t.length;e++)n.lineTo(t[e][0],t[e][1]);n.closePath(),n.fill()}function Ai(n,t,e,i,s){let r=3+Math.floor(t()*2),o=[];for(let a=0;a<r;a++){let l=a/r*Math.PI*2+t()*.8;o.push([e+Math.cos(l)*s*(.6+t()*.5),i+Math.sin(l)*s*(.6+t()*.5)])}ne(n,o)}var _y=new Set(["flower","tallgrass","fern","deadbush","mushroom","ladder","door_open","wheat"]);function yy(n,t){let e=Xe(t.color),i=Pd(xy(t.block+t.face)),s=Ci;if(_y.has(t.pattern)){vy(n,t,e,i,s);return}let r=1;t.pattern==="stained"?r=.5:t.pattern==="glass"?r=.22:t.pattern==="water"?r=.72:t.pattern==="ice"&&(r=.78),n.fillStyle=vt(e,1,r),n.fillRect(0,0,s,s);let o=t.pattern,a=t.accent?Xe(t.accent):null;if(o==="grass"&&t.face==="top"){n.fillStyle=vt(e,1.12);for(let h=0;h<4;h++)Ai(n,i,i()*s,i()*s,5+i()*4)}if(o==="snow"&&t.face==="top"){n.fillStyle=vt(e,.96);for(let h=0;h<4;h++)Ai(n,i,i()*s,i()*s,4+i()*4)}if((o==="grass"||o==="snow")&&t.face==="side"){let h=Xe(t.top);n.fillStyle=vt(h);let f=[[0,0],[s,0]];for(let m=s;m>=0;m-=4)f.push([m,8+Math.round(i()*5)]);ne(n,f)}if(o==="stone"||o==="bedrock")for(let h=0;h<5;h++)n.fillStyle=vt(e,i()<.5?.9:1.08),Ai(n,i,i()*s,i()*s,4+i()*6);if(o==="ore"){for(let h=0;h<4;h++)n.fillStyle=vt(e,.92),Ai(n,i,i()*s,i()*s,5);n.fillStyle=vt(a);for(let h=0;h<5;h++)Ai(n,i,5+i()*(s-10),5+i()*(s-10),2.5+i()*2.5)}if(o==="sand")for(let h=0;h<26;h++)n.fillStyle=vt(e,i()<.5?.92:1.05),n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2);if(o==="log"&&t.face==="side")for(let h=3;h<s;h+=7)n.fillStyle=vt(e,.82),n.fillRect(h,0,2,s);if(o==="log"&&t.face!=="side"&&(n.fillStyle=vt(e,.85),n.fillRect(6,6,s-12,s-12),n.fillStyle=vt(e,1.05),n.fillRect(11,11,s-22,s-22)),o==="leaves")for(let h=0;h<9;h++)n.fillStyle=vt(e,i()<.5?.78:1.15),Ai(n,i,i()*s,i()*s,3+i()*4);if(o==="planks"||o==="table"&&t.face==="bottom"){for(let h=7;h<s;h+=8)n.fillStyle=vt(e,.78),n.fillRect(0,h,s,1);n.fillStyle=vt(e,.85),n.fillRect(12,0,1,7),n.fillRect(22,8,1,7),n.fillRect(6,16,1,7),n.fillRect(18,24,1,8)}if(o==="table"&&t.face==="top"&&(n.fillStyle=vt(e,.8),n.fillRect(s/2-1,3,2,s-6),n.fillRect(3,s/2-1,s-6,2)),o==="table"&&t.face==="side"&&(n.fillStyle=vt(e,.7),n.fillRect(6,10,7,14),n.fillStyle=vt([185,182,174]),ne(n,[[18,10],[27,12],[25,15],[19,14]]),n.fillStyle=vt(e,.6),n.fillRect(21,14,2,10)),o==="glass"&&(n.fillStyle="rgba(255,255,255,0.45)",ne(n,[[6,24],[9,24],[24,9],[24,6]])),o==="water"){n.fillStyle=vt(e,1.18,.72);for(let h=6;h<s;h+=10)n.fillRect(4+Math.floor(i()*10),h,10,2)}if(o==="gold"&&(n.fillStyle=vt(e,1.15),ne(n,[[0,0],[s,0],[0,s]]),n.fillStyle=vt(e,.9),ne(n,[[s,s],[s,8],[8,s]])),o==="lamp"&&(t.face==="side"?(n.fillStyle=vt(Xe("#F3E3B5")),n.fillRect(7,6,s-14,s-12),n.fillStyle=vt(e,.85),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3)):t.face==="top"&&(n.fillStyle=vt(e,1.05),n.fillRect(8,8,s-16,s-16))),o==="torch"&&(n.clearRect(0,0,s,s),t.face==="side"?(n.fillStyle=vt(Xe("#8C6640")),n.fillRect(13,0,6,s),n.fillStyle=vt(Xe("#F2C46B")),n.fillRect(13,0,6,8),n.fillStyle=vt(a),n.fillRect(14,0,4,4)):(n.fillStyle=vt(Xe(t.face==="top"?"#F2C46B":"#8C6640")),n.fillRect(12,12,8,8))),o==="bed"&&(t.face==="top"?(n.fillStyle=vt(a),n.fillRect(0,0,s,10),n.fillStyle=vt(e,.85),n.fillRect(0,10,s,3)):t.face==="side"&&(n.fillStyle=vt(Xe("#E0352B")),n.fillRect(0,0,s,14),n.fillStyle=vt(a),n.fillRect(0,0,9,14))),o==="wool")for(let h=0;h<7;h++)n.fillStyle=vt(e,i()<.5?.94:1.04),Ai(n,i,i()*s,i()*s,4+i()*4);if(o==="portal"&&(n.fillStyle=vt(a),n.fillRect(5,5,s-10,s-10),n.fillStyle=vt(a,1.3),ne(n,[[s/2,8],[s-9,s/2],[s/2,s-8],[9,s/2]]),n.fillStyle=vt(Xe("#EFEBDD"),1,.8),ne(n,[[s/2,12],[s-13,s/2],[s/2,s-12],[13,s/2]]),n.fillStyle=vt(a),n.fillRect(s/2-3,s/2-3,6,6)),o==="sandstone")for(let h=8;h<s;h+=9)n.fillStyle=vt(e,.9),n.fillRect(0,h,s,2);if(o==="cactus")if(t.face==="side"){for(let h=4;h<s;h+=8)n.fillStyle=vt(e,.82),n.fillRect(h,0,2,s);n.fillStyle=vt(Xe("#EFEBDD"),1,.7);for(let h=0;h<6;h++)n.fillRect(Math.floor(i()*s),Math.floor(i()*s),2,2)}else n.fillStyle=vt(e,.85),n.fillRect(6,6,s-12,s-12);if(o==="ice"&&(n.fillStyle="rgba(255,255,255,0.4)",ne(n,[[4,22],[8,22],[22,6],[18,6]])),o==="stained"&&(n.fillStyle="rgba(255,255,255,0.35)",ne(n,[[6,24],[9,24],[24,9],[24,6]])),o==="paper"&&(n.fillStyle=vt(e,1.1),ne(n,[[0,0],[s,0],[0,s*.7]]),n.fillStyle=vt(e,.92),ne(n,[[s,s],[s*.45,s],[s,s*.4]])),o==="stonebricks"||o==="mossy"&&t.block.includes("bricks")||o==="cracked"){n.fillStyle=vt(e,.78);for(let h=0;h<s;h+=8){n.fillRect(0,h+7,s,1);let f=h/8%2?0:8;for(let m=f;m<s;m+=16)n.fillRect(m,h,1,8)}}if(o==="mossy"){n.fillStyle=vt(a);for(let h=0;h<6;h++)Ai(n,i,i()*s,i()*s,3+i()*4)}if(o==="cracked"&&(n.fillStyle=vt(e,.6),ne(n,[[4,2],[12,14],[10,15],[3,4]]),ne(n,[[20,18],[29,30],[27,31],[19,20]])),o==="chiseled"&&(n.fillStyle=vt(e,.8),n.fillRect(5,5,s-10,s-10),n.fillStyle=vt(e,1.08),n.fillRect(9,9,s-18,s-18),n.fillStyle=vt(e,.85),n.fillRect(13,13,s-26,s-26)),o==="smooth"&&(n.fillStyle=vt(e,.9),n.fillRect(0,s/2,s,1)),o==="polished"&&(n.fillStyle=vt(e,1.08),ne(n,[[0,0],[s*.6,0],[0,s*.6]])),o==="bricks"){n.fillStyle=vt(Xe("#D9CBB5"));for(let h=0;h<s;h+=8){n.fillRect(0,h+6,s,2);let f=h/8%2?0:8;for(let m=f;m<s;m+=16)n.fillRect(m,h,2,6)}}if(o==="checker"&&(n.fillStyle=vt(a),n.fillRect(0,0,s/2,s/2),n.fillRect(s/2,s/2,s/2,s/2)),o==="bookshelf"&&t.face==="side"){let h=["#C2443A","#4D6A99","#5E8B4E","#E1C04F","#7A5C8E","#D99AA5"];for(let f of[3,18]){let m=3;for(;m<s-4;){let x=3+Math.floor(i()*3);n.fillStyle=h[Math.floor(i()*h.length)],n.fillRect(m,f+Math.floor(i()*3),x,11),m+=x+1}}n.fillStyle=vt(e,.7),n.fillRect(0,15,s,2)}if(o==="bookshelf"&&t.face!=="side")for(let h=7;h<s;h+=8)n.fillStyle=vt(e,.8),n.fillRect(0,h,s,1);if(o==="hay")if(t.face==="side"){for(let h=3;h<s;h+=5)n.fillStyle=vt(e,.88),n.fillRect(h,0,1,s);n.fillStyle=vt(Xe("#8C6640")),n.fillRect(0,9,s,2),n.fillRect(0,21,s,2)}else n.fillStyle=vt(e,.9),n.fillRect(8,8,s-16,s-16);if(o==="barrel")if(t.face==="side"){for(let h=5;h<s;h+=6)n.fillStyle=vt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=vt(Xe("#3B3D3A")),n.fillRect(0,5,s,2),n.fillRect(0,s-7,s,2)}else n.fillStyle=vt(e,.85),n.beginPath(),n.arc(s/2,s/2,11,0,7),n.fill(),n.fillStyle=vt(e,1.05),n.beginPath(),n.arc(s/2,s/2,7,0,7),n.fill();if(o==="crate"&&(n.fillStyle=vt(e,.78),n.fillRect(0,0,s,4),n.fillRect(0,s-4,s,4),n.fillRect(0,0,4,s),n.fillRect(s-4,0,4,s),ne(n,[[4,s-7],[s-7,4],[s-4,7],[7,s-4]])),o==="door"){for(let h=7;h<s;h+=8)n.fillStyle=vt(e,.85),n.fillRect(h,0,1,s);n.fillStyle=vt(Xe("#EFEBDD"),1,.9),n.fillRect(8,5,6,7),n.fillRect(18,5,6,7),n.fillStyle=vt(Xe("#26302A")),n.fillRect(24,17,3,3)}if(o==="lantern"&&(t.face==="side"?(n.fillStyle=vt(a),n.fillRect(0,0,s,5),n.fillRect(0,s-5,s,5),n.fillRect(0,0,5,s),n.fillRect(s-5,0,5,s)):(n.fillStyle=vt(e),n.fillRect(0,0,s,s),n.fillStyle=vt(Xe("#F2C46B")),n.fillRect(12,12,8,8))),o==="chest"){for(let h=7;h<s;h+=8)n.fillStyle=vt(e,.85),n.fillRect(0,h,s,1);t.face==="side"&&(n.fillStyle=vt(a),n.fillRect(0,11,s,3),n.fillStyle=vt(Xe("#D9A63A")),n.fillRect(s/2-3,10,6,7))}if(o==="farmland"&&t.face==="top")for(let h=3;h<s;h+=6)n.fillStyle=vt(e,.72),n.fillRect(0,h,s,2);if(o==="furnace"){for(let h=0;h<4;h++)n.fillStyle=vt(e,i()<.5?.9:1.08),Ai(n,i,i()*s,i()*s,4+i()*5);t.face==="side"?(n.fillStyle=vt(a),n.fillRect(8,15,s-16,11),n.fillStyle=vt(Xe("#E0352B"),1,.85),ne(n,[[11,26],[s/2,18],[s-11,26]])):(n.fillStyle=vt(e,.8),n.fillRect(9,9,s-18,s-18))}o==="stele"&&t.face==="side"&&(n.fillStyle=vt(e,1.12),n.fillRect(5,4,s-10,s-8),n.fillStyle=vt(a),ne(n,[[s/2,8],[s/2+6,s/2],[s/2,s-8],[s/2-6,s/2]]));let l=n.getImageData(0,0,s,s),c=l.data;for(let h=0;h<c.length;h+=4){let f=1+(i()-.5)*.09;c[h]=Math.min(255,c[h]*f),c[h+1]=Math.min(255,c[h+1]*f),c[h+2]=Math.min(255,c[h+2]*f)}n.putImageData(l,0,0);let u=o==="glass"?"rgba(207,227,223,0.75)":"rgba(20,24,20,0.13)";n.fillStyle=u,n.fillRect(0,0,s,2),n.fillRect(0,s-2,s,2),n.fillRect(0,2,2,s-4),n.fillRect(s-2,2,2,s-4),o!=="glass"&&o!=="water"&&(n.fillStyle="rgba(20,24,20,0.06)",n.fillRect(2,2,s-4,2),n.fillRect(2,s-4,s-4,2))}function Ld(n){let t=document.createElement("canvas");t.width=t.height=Ci*Pl;let e=t.getContext("2d",{willReadFrequently:!0}),i=[];return n.tiles.forEach((s,r)=>{let o=document.createElement("canvas");o.width=o.height=Ci;let a=o.getContext("2d",{willReadFrequently:!0});yy(a,s),e.drawImage(o,r%Pl*Ci,Math.floor(r/Pl)*Ci),i[r]=o}),{canvas:t,tileCanvas:i}}function Dd(n,t){let e={};for(let i of n.blocks){if(!i.n)continue;let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");if(i.shape==="cross"||i.pattern==="ladder"||i.pattern==="door_open"){r.drawImage(t.tileCanvas[i.tile.side],4,4,40,40),e[i.id]=s.toDataURL();continue}if(i.shape==="torch"){r.fillStyle="#8C6640",r.fillRect(21,16,6,28),r.fillStyle="#F2C46B",ne(r,[[18,18],[24,4],[30,18],[24,22]]),r.fillStyle="#E0352B",ne(r,[[21,16],[24,9],[27,16]]),e[i.id]=s.toDataURL();continue}let o=t.tileCanvas,a=1/Ci,l=(c,u,h,f,m,x,v,d)=>{r.setTransform(u*a,h*a,f*a,m*a,x,v),r.drawImage(o[c],0,0),d&&(r.fillStyle=`rgba(20,24,20,${d})`,r.fillRect(0,0,Ci,Ci))};l(i.tile.top,20,10,-20,10,24,4,0),l(i.tile.side,20,10,0,22,4,14,.12),l(i.tile.side,20,-10,0,22,24,24,.26),e[i.id]=s.toDataURL()}for(let i of n.items){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d"),o=i.icon,a=i.color,l="#8C6640";if(r.save(),r.translate(24,24),o==="lump")r.fillStyle=a,ne(r,[[-14,4],[-8,-12],[6,-14],[15,-2],[10,12],[-6,14]]),r.fillStyle="rgba(255,255,255,.18)",ne(r,[[-8,-12],[6,-14],[2,-4]]);else if(o==="ingot")r.fillStyle=a,ne(r,[[-18,8],[-10,-6],[12,-6],[18,8]]),r.fillStyle="rgba(255,255,255,.3)",ne(r,[[-10,-6],[12,-6],[9,-1],[-8,-1]]),r.fillStyle="rgba(0,0,0,.12)",r.fillRect(-18,8,36,4);else if(o==="hide")r.fillStyle=a,ne(r,[[-15,-10],[-6,-15],[8,-13],[16,-6],[13,12],[0,15],[-14,10]]),r.fillStyle="rgba(0,0,0,.14)",ne(r,[[-6,-4],[6,-6],[4,6],[-5,5]]);else if(o==="feather")r.rotate(-Math.PI/4),r.fillStyle=a,ne(r,[[0,-20],[7,-6],[5,10],[0,14],[-5,10],[-7,-6]]),r.fillStyle="#B9B6AE",r.fillRect(-1,-14,2,32);else if(o==="seeds"){r.fillStyle=a;for(let[c,u]of[[-6,-4],[3,-8],[6,3],[-3,6],[-9,6]])r.beginPath(),r.ellipse(c,u,3,2,.6,0,7),r.fill()}else if(o==="wheat"){r.rotate(-Math.PI/4),r.fillStyle="#B89A4A",r.fillRect(-1,-6,2,24),r.fillStyle=a;for(let c=0;c<4;c++)ne(r,[[0,-18+c*5],[-5,-14+c*5],[0,-12+c*5]]),ne(r,[[0,-18+c*5],[5,-14+c*5],[0,-12+c*5]])}else if(o==="bread"){r.fillStyle=a,r.beginPath(),r.ellipse(0,2,17,10,-.2,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)";for(let c of[-8,0,8])r.fillRect(c-1,-6,3,8)}else o==="armor_helmet"?(r.fillStyle=a,ne(r,[[-14,6],[-14,-6],[-6,-14],[6,-14],[14,-6],[14,6],[8,6],[8,-2],[-8,-2],[-8,6]])):o==="armor_chest"?(r.fillStyle=a,ne(r,[[-16,-12],[-6,-16],[0,-10],[6,-16],[16,-12],[12,-2],[10,16],[-10,16],[-12,-2]])):o==="armor_legs"?(r.fillStyle=a,ne(r,[[-12,-16],[12,-16],[12,16],[3,16],[0,-4],[-3,16],[-12,16]])):o==="armor_boots"?(r.fillStyle=a,ne(r,[[-16,-4],[-8,-4],[-8,8],[-2,12],[-2,16],[-16,16]]),ne(r,[[2,-4],[10,-4],[10,8],[16,12],[16,16],[2,16]])):o==="dye"?(r.fillStyle=a,r.beginPath(),r.arc(-2,2,12,0,7),r.fill(),r.beginPath(),r.arc(9,-8,5,0,7),r.fill(),r.fillStyle="rgba(255,255,255,.25)",r.beginPath(),r.arc(-6,-2,4,0,7),r.fill()):o==="gem"?(r.fillStyle=a,ne(r,[[0,-16],[14,-4],[0,16],[-14,-4]]),r.fillStyle="rgba(255,255,255,.35)",ne(r,[[0,-16],[14,-4],[0,-2]])):(r.rotate(-Math.PI/4),r.fillStyle=o==="stick"?a:l,r.fillRect(-3,-14,6,32),r.fillStyle=a,o==="pickaxe"&&(r.beginPath(),r.moveTo(-16,-14),r.quadraticCurveTo(0,-24,16,-14),r.lineTo(14,-9),r.quadraticCurveTo(0,-17,-14,-9),r.closePath(),r.fill()),o==="axe"&&ne(r,[[2,-18],[15,-14],[15,-2],[2,-6]]),o==="shovel"&&ne(r,[[-7,-22],[7,-22],[8,-10],[0,-5],[-8,-10]]),o==="hoe"&&r.fillRect(-3,-18,14,5),o==="sword"&&(r.fillRect(-4,-24,8,30),ne(r,[[-4,-24],[0,-30],[4,-24]]),r.fillStyle=l,r.fillRect(-9,6,18,4)));r.restore(),e[i.id]=s.toDataURL()}for(let i of n.blueprints||[]){let s=document.createElement("canvas");s.width=s.height=48;let r=s.getContext("2d");r.fillStyle="#26302A",ne(r,[[6,10],[40,6],[42,38],[8,42]]),r.fillStyle="rgba(239,235,221,.55)";for(let o=0;o<4;o++)r.fillRect(12,14+o*7,24,2);r.fillStyle=i.id==="bp_diamond"?"#6FC7C0":"#D8D4CA",ne(r,[[28,26],[36,30],[30,38],[24,32]]),e[i.id]=s.toDataURL()}return e}function Nd(){let n=Pd(99),t=[],e=[];for(let i=0;i<4;i++){let s=document.createElement("canvas");s.width=s.height=Ci;let r=s.getContext("2d");i&&r.drawImage(e[i-1],0,0),r.fillStyle="rgba(21,23,20,0.55)";for(let o=0;o<3+i*2;o++){let a=6+n()*20,l=6+n()*20,c=n()*Math.PI;ne(r,[[a,l],[a+Math.cos(c)*9,l+Math.sin(c)*9],[a+Math.cos(c+.3)*6,l+Math.sin(c+.3)*6]])}e.push(s),t.push(s)}return t}function vy(n,t,e,i,s){n.clearRect(0,0,s,s);let r=t.pattern,o=t.accent?Xe(t.accent):e,a=(l,c,u)=>{n.fillStyle=u,n.fillRect(l,s-c,2,c)};if(r==="flower"){a(15,18,vt(e)),n.fillStyle=vt(e,1.1),ne(n,[[16,26],[9,20],[15,22]]),ne(n,[[17,24],[24,18],[18,21]]),n.fillStyle=vt(o);for(let l=0;l<5;l++){let c=l/5*Math.PI*2;ne(n,[[16,9],[16+Math.cos(c)*7,9+Math.sin(c)*7],[16+Math.cos(c+.6)*7,9+Math.sin(c+.6)*7]])}n.fillStyle=vt(Xe("#E1C04F")),n.fillRect(14,7,4,4)}else if(r==="tallgrass"||r==="fern")for(let l=0;l<6;l++){let c=4+l*4+Math.floor(i()*2),u=14+Math.floor(i()*14);n.fillStyle=vt(e,i()<.5?.9:1.1),ne(n,[[c,s],[c+3,s],[c+1+(r==="fern"?2:0),s-u]])}else if(r==="deadbush")n.strokeStyle=vt(e),n.lineWidth=2,n.beginPath(),n.moveTo(16,s),n.lineTo(16,18),n.lineTo(9,10),n.moveTo(16,20),n.lineTo(24,11),n.moveTo(16,24),n.lineTo(7,19),n.stroke();else if(r==="mushroom")n.fillStyle=vt(e),n.fillRect(14,18,4,14),n.fillStyle=vt(o),ne(n,[[6,19],[10,11],[16,8],[22,11],[26,19]]),n.fillStyle=vt(Xe("#EFEBDD")),n.fillRect(12,13,3,2),n.fillRect(19,15,2,2);else if(r==="ladder"){n.fillStyle=vt(e),n.fillRect(5,0,3,s),n.fillRect(s-8,0,3,s),n.fillStyle=vt(e,1.12);for(let l=3;l<s;l+=7)n.fillRect(5,l,s-10,3)}else if(r==="wheat"){let l=Number(t.block.split("_")[1])||0,c=[8,14,21,28][l];for(let u=0;u<5;u++){let h=5+u*5;n.fillStyle=vt(e),n.fillRect(h,s-c,2,c),l===3&&(n.fillStyle=vt(o),ne(n,[[h-2,s-c+9],[h+1,s-c-1],[h+4,s-c+9]]))}}else r==="door_open"&&(n.fillStyle=vt(e),n.fillRect(0,0,s,3),n.fillRect(0,s-3,s,3),n.fillRect(0,0,3,s),n.fillRect(s-3,0,3,s))}var Ud=`attribute float light; attribute vec2 lt; varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vUv=uv; vL=light; vLt=lt; vec4 mv=modelViewMatrix*vec4(position,1.0); vD=-mv.z; gl_Position=projectionMatrix*mv; }`,Fd=`uniform sampler2D uAtlas; uniform float uDay; uniform vec3 uFog; uniform float uNear; uniform float uFar;
varying vec2 vUv; varying float vL; varying vec2 vLt; varying float vD;
void main(){ vec4 t=texture2D(uAtlas,vUv); if(t.a<0.04) discard;
 vec3 tint=vec3(1.0); float l;
 if(vL>1.5){ l=1.12; } else {
  float sky=vLt.x*mix(0.35,1.0,uDay), bl=vLt.y;
  l=vL*mix(0.16,1.0,max(sky,bl)); l=floor(l*5.0+0.5)/5.0; l=max(l,0.08);
  tint=mix(vec3(1.0),vec3(1.12,0.97,0.8),step(sky,bl)*bl);
 }
 float f=smoothstep(uNear,uFar,vD); gl_FragColor=vec4(mix(t.rgb*l*tint,uFog,f), t.a); }`;function My(n,t){let e=Ti(n),i=Ti(t),s=[[e,i]];for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++){if(!o&&!r)continue;let a=(e+o)*16,l=(i+r)*16,c=n<a?a-n:n>=a+16?n-(a+16-1):0,u=t<l?l-t:t>=l+16?t-(l+16-1):0;Math.max(c,u)<=14&&s.push([e+o,i+r])}return s}function Bd(n){let t=new hi(n);t.magFilter=$e,t.minFilter=$e,t.generateMipmaps=!1;let e={uAtlas:{value:t},uDay:{value:1},uFog:{value:new $(.94,.92,.87)},uNear:{value:30},uFar:{value:60}},i=new dn({uniforms:e,vertexShader:Ud,fragmentShader:Fd}),s=new dn({uniforms:e,vertexShader:Ud,fragmentShader:Fd,transparent:!0,depthWrite:!1,side:Nn});return{opaque:i,trans:s,uniforms:e,tex:t}}function Od(n){let t=new Qe;return t.setAttribute("position",new He(n.pos,3)),t.setAttribute("uv",new He(n.uv,2)),t.setAttribute("light",new He(n.light,1)),t.setAttribute("lt",new He(n.lt,2,!0)),t.setIndex(new He(n.index,1)),t.computeBoundingSphere(),t}var Ll=class{constructor({scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}){Object.assign(this,{scene:t,mats:e,reg:i,worker:s,diffs:r,onDirty:o}),this.chunks=new Map,this.dirtyMesh=new Set,this.inflight=0,this.maxInflight=3,this.rd=4,this.rev=0,this.stats={meshMs:[],genMs:[],loaded:0},s.addEventListener("message",a=>this.onMsg(a.data))}onMsg(t){if(t.type!=="chunk"&&t.type!=="mesh")return;let e=fs(t.cx,t.cz),i=this.chunks.get(e);t.type==="chunk"&&this.inflight--,i&&(t.type==="chunk"&&(i.vox=t.vox,i.state="ready",this.stats.genMs.push(t.genMs)),!(t.rev<i.meshRev)&&(this.stats.meshMs.push(t.ms),this.stats.meshMs.length>400&&this.stats.meshMs.shift(),this.setMesh(i,t.mesh)))}setMesh(t,e){for(let i of["o","t"])t[i]&&(this.scene.remove(t[i]),t[i].geometry.dispose(),t[i]=null);e.opaque.index.length&&(t.o=new We(Od(e.opaque),this.mats.opaque),t.o.position.set(t.cx*16,0,t.cz*16),t.o.matrixAutoUpdate=!1,t.o.updateMatrix(),this.scene.add(t.o)),e.trans.index.length&&(t.t=new We(Od(e.trans),this.mats.trans),t.t.position.set(t.cx*16,0,t.cz*16),t.t.matrixAutoUpdate=!1,t.t.updateMatrix(),t.t.renderOrder=1,this.scene.add(t.t))}flushMeshes(){if(this.dirtyMesh.size){for(let t of this.dirtyMesh){let e=this.chunks.get(t);e&&e.state==="ready"&&(e.meshRev=++this.rev,this.worker.postMessage({type:"mesh",cx:e.cx,cz:e.cz,rev:e.meshRev}))}this.dirtyMesh.clear()}}update(t,e){this.flushMeshes();let i=Ti(t),s=Ti(e),r=xd(i,s,this.rd);for(let l of r){if(this.inflight>=this.maxInflight)break;let c=fs(l.cx,l.cz);if(this.chunks.has(c))continue;let u={cx:l.cx,cz:l.cz,vox:null,state:"loading",meshRev:++this.rev,o:null,t:null};this.chunks.set(c,u),this.inflight++,this.worker.postMessage({type:"load",cx:l.cx,cz:l.cz,rev:u.meshRev})}let o=this.rd+1.5,a=[];for(let[l,c]of this.chunks){let u=c.cx-i,h=c.cz-s;if(u*u+h*h>o*o){for(let f of["o","t"])c[f]&&(this.scene.remove(c[f]),c[f].geometry.dispose());this.chunks.delete(l),a.push(l)}}a.length&&this.worker.postMessage({type:"drop",keys:a.filter(l=>{let[c,u]=l.split(",").map(Number);return Math.abs(c-i)>this.rd+3||Math.abs(u-s)>this.rd+3})}),this.stats.loaded=[...this.chunks.values()].filter(l=>l.state==="ready").length}ready(t,e){let i=this.chunks.get(fs(Ti(t),Ti(e)));return!!(i&&i.state==="ready")}get(t,e,i){let s=yh(t,e,i);if(!s)return e<0?13:0;let r=this.chunks.get(fs(s.cx,s.cz));return r&&r.vox?r.vox[s.i]:0}set(t,e,i,s){let r=yh(t,e,i);if(!r)return!1;let o=fs(r.cx,r.cz),a=this.chunks.get(o);if(!a||!a.vox)return!1;a.vox[r.i]=s,Rd(this.diffs,o,r.i,s),this.worker.postMessage({type:"set",x:t,y:e,z:i,n:s});let l=Math.floor(t),c=Math.floor(i);for(let[u,h]of My(l,c))this.dirtyMesh.add(fs(u,h));return this.onDirty&&this.onDirty(o),!0}setRenderDistance(t){this.rd=t;let e=this.mats.uniforms;e.uFar.value=t*16-2,e.uNear.value=Math.max(8,t*16*.45)}clear(){for(let t of this.chunks.values())for(let e of["o","t"])t[e]&&(this.scene.remove(t[e]),t[e].geometry.dispose());this.chunks.clear()}};var Ih="hw_world",so=null;function zd(n){n!==Ih&&(Ih=n,so=null)}function kd(){return so||(so=new Promise((n,t)=>{if(!("indexedDB"in self))return t(new Error("no indexedDB"));let e=indexedDB.open(Ih,1);e.onupgradeneeded=()=>e.result.createObjectStore("kv"),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),so)}function Ph(n,t){return kd().then(e=>new Promise((i,s)=>{let r=e.transaction("kv",n),o=r.objectStore("kv"),a=t(o);r.oncomplete=()=>i(a instanceof IDBRequest?a.result:void 0),r.onerror=()=>s(r.error)}))}var Lh=n=>Ph("readonly",t=>t.get(n)),Dh=n=>Ph("readwrite",t=>{for(let e in n)t.put(n[e],e)});async function Vd(n){let t=await kd();return new Promise((e,i)=>{let s={},r=t.transaction("kv","readonly"),o=r.objectStore("kv").openCursor(IDBKeyRange.bound(n,n+"\uFFFF"));o.onsuccess=()=>{let a=o.result;a&&(s[a.key]=a.value,a.continue())},r.oncomplete=()=>e(s),r.onerror=()=>i(r.error)})}async function Gd(n){let t={};for(let e of n){let i=await Lh(e);i!==void 0&&(t[e]=i)}await Ph("readwrite",e=>e.clear()),await Dh(t)}function F(n,t,...e){let i=document.createElement(n);for(let s in t||{}){let r=t[s];r==null||r===!1||(s.startsWith("on")?i.addEventListener(s.slice(2),r):s==="html"?i.innerHTML=r:i.setAttribute(s,r===!0?"":r))}for(let s of e.flat())s!=null&&s!==!1&&i.append(s.nodeType?s:document.createTextNode(String(s)));return i}var Ri=n=>document.querySelector(n);var by="../../",wy=["data/words.js","data/words-2.js","data/words-3.js","data/words-4.js","data/phrases.js","data/roots.js","data/grammar.js","data/patterns.js","engine.js"],Nh=["zh2en","en2zh","zh2en-type","phrase-fill","grammar-fill","pattern-choose"],Dl=null;function Ey(n){return new Promise((t,e)=>{let i=document.createElement("script");i.src=n,i.onload=t,i.onerror=()=>e(new Error("load "+n)),document.head.appendChild(i)})}function Uh(){return Dl||(Dl=(async()=>{for(let t of wy)await Ey(by+t);let n=window;return new n.KE.Engine({words:n.DATA_WORDS||[],phrases:n.DATA_PHRASES||[],roots:n.DATA_ROOTS||[],grammar:n.DATA_GRAMMAR||[],patterns:n.DATA_PATTERNS||[]})})().catch(n=>{throw Dl=null,n})),Dl}async function Hd(n,{onReward:t,onClose:e,count:i=5}){n.innerHTML="",n.hidden=!1;let s=F("div",{class:"panel quiz"});n.append(s),s.append(F("div",{class:"p-head"},F("h2",{},"\u7DF4\u7FD2\u77F3\u7891"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),F("p",{class:"muted"},"\u984C\u5EAB\u8F09\u5165\u4E2D\u2026"));let r;try{r=await Uh()}catch{s.lastChild.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u5F8C\u518D\u8A66\u4E00\u6B21\u3002";return}let o=window.KE,a=[],l=0,c=0,u=0;function h(){n.hidden=!0,n.innerHTML="",e&&e()}function f(){a=r.buildQuiz({modules:["words","phrases","grammar","patterns"],types:Nh,lv:1,count:i}),a.length||(a=r.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:i})),l=0,c=0,u=0,m()}function m(){s.innerHTML="";let d=a[l],p=o.isTyped(d);n._q=d;let A=F("div",{class:"fb"}),L=F("div",{class:"q-body"});s.append(F("div",{class:"p-head"},F("h2",{},"\u7DF4\u7FD2\u77F3\u7891 ",F("small",{},`\u7B2C ${l+1} / ${a.length} \u984C`)),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),F("div",{class:"q-type"},(o.TYPES[d.type]||"\u984C\u76EE")+(p?"\u3000\u6253\u5B57\u984C \xB7 \u7B54\u5C0D 2 \u91D1\u5E63":"\u3000\u7B54\u5C0D 1 \u91D1\u5E63")),F("div",{class:"q-prompt"+(d.en?" en":"")},d.prompt),d.sub?F("div",{class:"q-sub"},d.sub):null,L,A);let b=!1,T=E=>{if(b)return;b=!0;let D=wd(E,p);E&&(u++,c+=D,t&&t(D)),A.className="fb "+(E?"ok":"bad"),A.append(F("div",{},E?`\u7B54\u5C0D\u4E86\uFF01 +${D} \u91D1\u5E63`:"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",E?null:F("b",{class:"en"},d.answer)),!E&&d.why?F("div",{class:"why"},d.why):null,F("button",{class:"btn",onclick:x},l+1<a.length?"\u4E0B\u4E00\u984C":"\u770B\u7D50\u679C"))};if(d.input==="type"){let E=F("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),D=()=>{b||!E.value.trim()||T(r.check(d,E.value).ok)};E.addEventListener("keydown",M=>{M.stopPropagation(),M.key==="Enter"&&D()}),L.append(F("div",{class:"typerow"},E,F("button",{class:"btn",onclick:D},"\u9001\u51FA"))),setTimeout(()=>E.focus(),50)}else{let E=F("div",{class:"opts"});(d.options||[]).forEach(D=>E.append(F("button",{class:"opt"+(/[a-z]/i.test(D)?" en":""),onclick:M=>{if(b)return;let w=r.check(d,D).ok;M.currentTarget.classList.add(w?"ok":"bad"),T(w)}},D))),L.append(E)}}function x(){l++,l<a.length?m():v()}function v(){s.innerHTML="",s.append(F("div",{class:"p-head"},F("h2",{},"\u9019\u4E00\u56DE\u7D50\u675F"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:h},"\xD7")),F("p",{class:"big"},`\u7B54\u5C0D ${u} / ${a.length} \u984C\uFF0C\u62FF\u5230 ${c} \u91D1\u5E63`),F("div",{class:"row"},F("button",{class:"btn",onclick:f},"\u518D\u4F86\u4E00\u56DE"),F("button",{class:"btn ghost",onclick:h},"\u56DE\u53BB\u84CB\u623F\u5B50")))}f()}var Ty=new Set(Nh);async function Wd(n,{ids:t=[],onDone:e}){n.innerHTML="",n.hidden=!1;let i=F("div",{class:"panel quiz"});n.append(i),i.append(F("p",{class:"muted"},"\u932F\u984C\u602A\u51FA\u984C\u4E2D\u2026"));let s;try{s=await Uh()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(null)},1200);return}let r=window.KE,o=null;for(let m of t){let x=s.byId[m];if(x&&Ty.has(x.type)){o=s.get(m);break}}let a=!!o;o||(o=s.buildQuiz({modules:["words","phrases","grammar","patterns"],types:Nh,lv:1,count:1})[0]);let l=r.isTyped(o);n._q=o,i.innerHTML="";let c=F("div",{class:"fb"}),u=F("div",{class:"q-body"});i.append(F("div",{class:"p-head"},F("h2",{},"\u932F\u984C\u602A\u4F86\u4E86\uFF01")),F("div",{class:"q-type"},(a?"\u4F60\u4EE5\u524D\u932F\u904E\u7684\u984C\u76EE":r.TYPES[o.type]||"\u984C\u76EE")+"\u3000\u7B54\u5C0D\u5C31\u80FD\u6253\u6557\u5B83"),F("div",{class:"q-prompt"+(o.en?" en":"")},o.prompt),o.sub?F("div",{class:"q-sub"},o.sub):null,u,c);let h=!1,f=m=>{h||(h=!0,c.className="fb "+(m?"ok":"bad"),c.append(F("div",{},m?"\u7B54\u5C0D\u4E86\uFF01\u932F\u984C\u602A\u8B8A\u6210\u7D19\u7247\u98DB\u8D70\u4E86":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",m?null:F("b",{class:"en"},o.answer)),!m&&o.why?F("div",{class:"why"},o.why):null,F("button",{class:"btn",onclick:()=>{n.hidden=!0,n.innerHTML="",e&&e(m,l)}},"\u7E7C\u7E8C")))};if(o.input==="type"){let m=F("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),x=()=>{h||!m.value.trim()||f(s.check(o,m.value).ok)};m.addEventListener("keydown",v=>{v.stopPropagation(),v.key==="Enter"&&x()}),u.append(F("div",{class:"typerow"},m,F("button",{class:"btn",onclick:x},"\u9001\u51FA"))),setTimeout(()=>m.focus(),50)}else{let m=F("div",{class:"opts"});(o.options||[]).forEach(x=>m.append(F("button",{class:"opt"+(/[a-z]/i.test(x)?" en":""),onclick:v=>{if(h)return;let d=s.check(o,x).ok;v.currentTarget.classList.add(d?"ok":"bad"),f(d)}},x))),u.append(m)}}async function Xd(n,{quest:t,onDone:e}){n.innerHTML="",n.hidden=!1;let i=F("div",{class:"panel quiz"});n.append(i),i.append(F("p",{class:"muted"},"\u59D4\u8A17\u6E96\u5099\u4E2D\u2026"));let s;try{s=await Uh()}catch{i.textContent="\u984C\u5EAB\u8F09\u5165\u5931\u6557",setTimeout(()=>{n.hidden=!0,e&&e(-1)},1200);return}let r=window.KE,o=s.buildQuiz({modules:[t.module],types:t.types,lv:t.lv,count:t.count});o.length||(o=s.buildQuiz({modules:["words"],types:["zh2en","en2zh"],count:t.count}));let a=0,l=0,c=()=>{i.innerHTML="";let u=o[a];n._q=u;let h=F("div",{class:"fb"}),f=F("div",{class:"q-body"});i.append(F("div",{class:"p-head"},F("h2",{},t.title_zh+" ",F("small",{},`\u7B2C ${a+1} / ${o.length} \u984C \xB7 \u8981\u7B54\u5C0D ${t.need} \u984C`))),F("div",{class:"q-type"},r.TYPES[u.type]||"\u984C\u76EE"),F("div",{class:"q-prompt"+(u.en?" en":"")},u.prompt),u.sub?F("div",{class:"q-sub"},u.sub):null,f,h);let m=!1,x=v=>{m||(m=!0,v&&l++,h.className="fb "+(v?"ok":"bad"),h.append(F("div",{},v?"\u7B54\u5C0D\u4E86\uFF01":"\u5DEE\u4E00\u9EDE\uFF01 \u6B63\u78BA\u7B54\u6848\uFF1A",v?null:F("b",{class:"en"},u.answer)),!v&&u.why?F("div",{class:"why"},u.why):null,F("button",{class:"btn",onclick:()=>{a++,a<o.length?c():(n.hidden=!0,n.innerHTML="",e&&e(l,o.length))}},a+1<o.length?"\u4E0B\u4E00\u984C":"\u5B8C\u6210")))};if(u.input==="type"){let v=F("input",{class:"typein en",type:"text",autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false",enterkeyhint:"done",placeholder:"\u5728\u9019\u88E1\u6253\u82F1\u6587"}),d=()=>{m||!v.value.trim()||x(s.check(u,v.value).ok)};v.addEventListener("keydown",p=>{p.stopPropagation(),p.key==="Enter"&&d()}),f.append(F("div",{class:"typerow"},v,F("button",{class:"btn",onclick:d},"\u9001\u51FA"))),setTimeout(()=>v.focus(),50)}else{let v=F("div",{class:"opts"});(u.options||[]).forEach(d=>v.append(F("button",{class:"opt"+(/[a-z]/i.test(d)?" en":""),onclick:p=>{if(m)return;let A=s.check(u,d).ok;p.currentTarget.classList.add(A?"ok":"bad"),x(A)}},d))),f.append(v)}};c()}function qd(n,t,e){let[i,s]=String(n).split(",").map(Number),r=u=>Jn(4242,i|0,t*7+u,s|0),o=e.professions[Math.floor(r(1)*e.professions.length)],a=e.quests,l=Math.floor(r(2)*a.length),c=(l+1+Math.floor(r(3)*(a.length-1)))%a.length;return{prof:o,quests:[a[l],a[c]]}}function Yd(n,t,e,i=()=>64){return n.coins<e.price?{ok:!1,reason:"coins"}:e.blueprint?ir(n,e.blueprint)?{ok:!1,reason:"owned"}:(io(n,e.price),n.owned.push(e.blueprint),{ok:!0}):eo(t,e.give,e.count,i)?(io(n,e.price),vn(t,e.give,e.count,i),{ok:!0}):{ok:!1,reason:"full"}}var Fh=(n,t,e)=>!!(n&&n[t.id]===e);function $d(n,t,e,i,s,r,o=()=>64){if(Fh(n,t,i))return{ok:!1,reason:"done"};if(e<t.need)return{ok:!1,reason:"need"};n[t.id]=i,gs(s,t.reward.coins|0);let a={};for(let l in t.reward.items||{}){let c=vn(r,l,t.reward.items[l],o);c&&(a[l]=c)}return{ok:!0,coins:t.reward.coins|0,items:t.reward.items||{},leftovers:a}}function Zd(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}var Oh={survival:{db:"hw_world",seedOffset:0},creative:{db:"hw_creative",seedOffset:1}},Nl=n=>n==="creative"?"creative":"survival",Jd=n=>Oh[Nl(n)].db;function Kd(n,t,e){return n?n.isSet(e)?n.verify(t,e)?{ok:!0}:{ok:!1,reason:"wrong"}:{ok:!1,reason:"unset"}:{ok:!1,reason:"nopin"}}function jd(n){let t=Nl(n)==="creative";return{creative:t,consume:!t,drops:!t,damage:!t,coins:!t,quizMobs:!t,portals:!t,trading:!t,breakTime:t?.08:null}}function Qd(n){return n.blocks.filter(t=>t.n&&t.placeable&&!["stele","bedrock","door_open"].includes(t.id)&&!t.portal&&!t.liquid&&!t.hidden).map(t=>t.id)}var tp=["grass","stone_bricks","planks","glass","wool_red","paper_yellow","lantern","door","flower_rose"];var Yh={};Ms(Yh,{BREED_CAP:()=>Xh,LOVE_MS:()=>np,MAX_STAGE:()=>Iy,STAGE_SECONDS:()=>Ry,armorMax:()=>ep,armorPoints:()=>ro,canTill:()=>zh,eat:()=>Wh,equip:()=>Py,findMate:()=>qh,harvest:()=>kh,nearWater:()=>Vh,reduceDamage:()=>Hh,stageAt:()=>Bh,wearArmor:()=>Gh});var Ry=60,Iy=3;function Bh(n,t,e){let i=Math.floor((t-n)/1e3/(e?30:60));return Math.max(0,Math.min(3,i))}var zh=(n,t)=>(n==="grass"||n==="dirt")&&t;function kh(n,t=Math.random){return n>=3?[{id:"wheat",n:1},{id:"seeds",n:1+Math.floor(t()*2)}]:[{id:"seeds",n:1}]}function Vh(n,t,e,i,s,r=4){for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++)for(let l of[0,-1])if(t(n(e+a,i+l,s+o)))return!0;return!1}function ro(n,t){return(n||[]).reduce((e,i)=>{let s=i&&t.get(i);return e+(s&&s.armor?s.armor.points:0)},0)}var ep=(n,t)=>{let e=n&&t.get(n);return e&&e.armor?e.armor.dur||100:0};function Gh(n,t,e,i=1){let s=[];return n.forEach((r,o)=>{if(!r)return;let a=(t[o]==null?ep(r,e):t[o])-i;a<=0?(s.push(r),n[o]=null,t[o]=null):t[o]=a}),s}var Hh=(n,t)=>Math.max(0,Math.round(n*(1-Math.min(.8,t*.04))));function Py(n,t,e,i){let s=e&&i.get(e);if(e&&(!s||!s.armor||s.armor.slot!==t))return{ok:!1};let r=n[t]||null;return n[t]=e||null,{ok:!0,old:r}}function Wh(n,t,e){return n.hp>=e?!1:(n.hp=Math.min(e,n.hp+t),!0)}var np=3e4,Xh=12;function qh(n,t,e){return n.find(i=>i!==t&&!i.gone&&i.type===t.type&&i.love&&e-i.love<np&&Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z)<8)||null}var Kh={};Ms(Kh,{apply:()=>Ol,duck:()=>Ki,muted:()=>oo,rainLevel:()=>Jh,scene:()=>Zh,setVolume:()=>Bl,sfx:()=>wn,state:()=>Ly,toggleMute:()=>$h,unlock:()=>Fl});var Oe=null,xs=null,Ul=null,sr=null,Ln=()=>window.HIAudio||null,sp=()=>Ln()?Ln().get():{muted:!1,music:.35,sfx:.7};function Fl(){try{Ln()&&Ln().unlock()}catch{}if(!Oe){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Oe=new n,xs=Oe.createGain(),xs.connect(Oe.destination),Ul=Oe.createBuffer(1,Oe.sampleRate,Oe.sampleRate);let t=Ul.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}Oe.state==="suspended"&&Oe.resume(),Ol()}function Ol(){if(xs){let n=sp();xs.gain.setTargetAtTime(n.muted?0:n.sfx,Oe.currentTime,.03)}}var oo=()=>sp().muted;function $h(){return Ln()&&Ln().toggle(),Ol(),oo()}function Bl(n){Ln()&&Ln().set(n),Ol()}function Zh(n){try{Ln()&&Ln().scene(n)}catch{}}function Ki(n){let t=Ln();t&&(n&&Ki.id==null?Ki.id=t.duckStart():!n&&Ki.id!=null&&(t.duckEnd(Ki.id),Ki.id=null))}function rp(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+e+s)}function Fn(n,t,e,i,s,r,o){let a=Oe.createOscillator(),l=Oe.createGain();a.type=n,a.frequency.setValueAtTime(t,e),o&&a.frequency.exponentialRampToValueAtTime(o,e+i+r),rp(l,e,i,s,r),a.connect(l),l.connect(xs),a.start(e),a.stop(e+i+r+.05)}function ji(n,t,e,i,s,r=1){let o=Oe.createBufferSource(),a=Oe.createBiquadFilter(),l=Oe.createGain();o.buffer=Ul,a.type=n,a.frequency.value=t,a.Q.value=r,rp(l,e,.004,i,s),o.connect(a),a.connect(l),l.connect(xs),o.start(e,Math.random()*.5),o.stop(e+s+.05)}var ip={wood:(n,t)=>{Fn("sine",190*t,n,.003,.16,.12,95*t),ji("bandpass",700*t,n,.08,.08,2)},stone:(n,t)=>{ji("highpass",1800*t,n,.1,.06),Fn("triangle",140*t,n,.002,.08,.08,90*t)},sand:(n,t)=>{ji("lowpass",520*t,n,.12,.18)},glass:(n,t)=>{Fn("sine",1900*t,n,.002,.08,.25,1500*t),ji("highpass",4200,n,.06,.12)},soft:(n,t)=>{ji("bandpass",850*t,n,.09,.1,.8)}};function wn(n,t="soft"){if(!Oe||oo())return;let e=Oe.currentTime+.005,i=ip[t]||ip.soft;switch(n){case"break":i(e,1),i(e+.05,.8);break;case"hit":i(e,1.15);break;case"place":i(e,1.3);break;case"step":{ji(t==="stone"?"highpass":"bandpass",t==="stone"?1500:650,e,t==="sand"?.05:.035,.06);break}case"pickup":Fn("sine",880,e,.002,.07,.08,1320);break;case"chest":Fn("triangle",160,e,.02,.07,.3,120),Fn("sine",330,e+.12,.005,.05,.15);break;case"door":Fn("sawtooth",120,e,.03,.04,.3,160),ji("lowpass",400,e+.25,.08,.1);break;case"eat":[0,.13,.26].forEach(s=>ji("bandpass",1200+Math.random()*600,e+s,.07,.07,1.5));break;case"trade":Fn("triangle",659,e,.005,.08,.15),Fn("triangle",988,e+.1,.005,.08,.25);break;case"coin":Fn("sine",1319,e,.002,.08,.08),Fn("sine",1976,e+.07,.002,.08,.22);break;case"hurt":Fn("triangle",300,e,.005,.1,.18,200);break;default:break}}function Jh(n){if(Oe){if(!sr&&n>.01){let t=Oe.createBufferSource(),e=Oe.createBiquadFilter(),i=Oe.createBiquadFilter(),s=Oe.createGain();t.buffer=Ul,t.loop=!0,e.type="lowpass",e.frequency.value=2600,i.type="highpass",i.frequency.value=400,s.gain.value=0,t.connect(i),i.connect(e),e.connect(s),s.connect(xs),t.start(),sr={s:t,g:s}}sr&&sr.g.gain.setTargetAtTime(.06*n,Oe.currentTime,.4)}}var Ly=()=>({ctx:Oe?Oe.state:"none",hi:Ln()?Ln().state():null,rain:sr?+sr.g.gain.value.toFixed(3):0});var iu={};Ms(iu,{HI_SCENE:()=>Qh,createWeather:()=>tu,precipFor:()=>nu,sceneFor:()=>jh,soundOf:()=>rr,stepWeather:()=>eu});function rr(n){if(!n)return"soft";let t=n.pattern||"";return t==="glass"||t==="stained"||t==="ice"?"glass":t==="sand"||t==="snow"||n.id==="sand"||n.id==="farmland"?"sand":n.tool==="axe"||t==="planks"||t==="log"||t==="door"?"wood":n.tool==="pickaxe"?"stone":"soft"}function jh({day:n,underground:t}){return t?"cave":n<.25?"night":"calm"}var Qh={calm:"hub",night:"night",cave:"cave"};function tu(n=Math.random){return{kind:"clear",left:180+n()*300,level:0}}function eu(n,t,e=Math.random){n.left-=t,n.left<=0&&(n.kind==="clear"?(n.kind="rain",n.left=60+e()*90):(n.kind="clear",n.left=180+e()*300));let i=n.kind==="rain"?1:0;return n.level+=Math.sign(i-n.level)*Math.min(Math.abs(i-n.level),t/6),n}function nu(n,t){return!t||t.level<=.01||n==="desert"?null:n==="snow"?"snow":"rain"}var Dy=[1,2,4,6,8];function zl(n,t){if(!n||n.hardness<0)return{time:1/0,harvest:!1,usesTool:!1};let e=.25+n.hardness*.55,i=n.tier|0,r=!!(t&&n.tool&&t.type===n.tool)?t.tier:0;return i>0&&r<i?{time:e*3,harvest:!1,usesTool:!!t&&t.type!=="sword"}:{time:Math.max(.1,e/Dy[r]),harvest:!0,usesTool:!!t&&t.type!=="sword"}}function kl(n,t,e,i=1){let s=n.slots[t];if(!s)return{broke:!1};let r=e.toolOf(s.id);if(!r)return{broke:!1};let o=r.durability;return s.dur=(s.dur==null?o:s.dur)-i,s.dur<=0?(n.slots[t]=null,{broke:!0,id:s.id}):{broke:!1,left:s.dur,max:o}}function op(n,t){if(!n)return null;let e=t.toolOf(n.id),i=!e&&t.get(n.id),s=e?e.durability:i&&i.armor?i.armor.dur||100:0;if(!s)return null;let r=n.dur==null?s:n.dur;return{left:r,max:s,frac:r/s}}var cu={};Ms(cu,{collect:()=>au,createFurnace:()=>su,dismantle:()=>lu,start:()=>ru,tick:()=>ou});function su(){return{fuel:0,jobs:[],done:{}}}function ru(n,t,e,i=4){if(jn(t,e.in)<1)return{ok:!1,reason:"materials"};let s=n.jobs.length;if(n.fuel-s<1){if(jn(t,"coal")<1)return{ok:!1,reason:"fuel"};to(t,"coal",1),n.fuel+=i}return to(t,e.in,1),n.jobs.push({in:e.in,out:e.out,left:e.time}),{ok:!0}}function ou(n,t){for(;t>0&&n.jobs.length;){let e=n.jobs[0],i=Math.min(t,e.left);e.left-=i,t-=i,e.left<=1e-9&&(n.jobs.shift(),n.fuel-=1,n.done[e.out]=(n.done[e.out]||0)+1)}return n}function au(n,t,e=()=>64){let i=0;for(let s of Object.keys(n.done)){let r=vn(t,s,n.done[s],e);i+=n.done[s]-r,r?n.done[s]=r:delete n.done[s]}return i}function lu(n){let t=Object.assign({},n.done);for(let e of n.jobs)t[e.in]=(t[e.in]||0)+1;return t}var gu={};Ms(gu,{MAX_HP:()=>ao,REGEN_EVERY:()=>Uy,SAFE_FALL:()=>Ny,createHealth:()=>hu,damage:()=>fu,fallDamage:()=>uu,hearts:()=>mu,regen:()=>du,respawnPoint:()=>pu});var ao=20,Ny=4,Uy=4;function hu(n=20){return{hp:Math.max(0,Math.min(20,n)),regenT:0}}function uu(n,{water:t=!1,flying:e=!1}={}){return t||e||n<=4?0:Math.floor((n-4)/2)+1}function fu(n,t){return t>0&&(n.hp=Math.max(0,n.hp-t),n.regenT=0),n.hp<=0}function du(n,t){return n.hp<=0||n.hp>=20?(n.regenT=0,!1):(n.regenT+=t,n.regenT>=4?(n.regenT-=4,n.hp=Math.min(20,n.hp+1),!0):!1)}function pu(n,t,e){return n&&e?{x:n.x+.5,y:n.y+1,z:n.z+.5}:{x:t.x,y:t.y,z:t.z}}function mu(n){let t=[];for(let e=0;e<20/2;e++){let i=n-e*2;t.push(i>=2?"full":i===1?"half":"empty")}return t}var Vl={animal:8,quiz:4};function ap(){return{list:[],nextId:1}}var lo=(n,t)=>n.list.reduce((e,i)=>e+(i.kind===t&&!i.gone?1:0),0);function lp(n,t,e){let i={id:n.nextId++,type:t.id,kind:t.kind,def:t,p:{x:e.x,y:e.y,z:e.z},v:{x:0,y:0,z:0},yaw:0,hp:t.hp||2,t:0,turn:0,gone:!1,busy:!1,onGround:!1};return n.list.push(i),i}function cp(n,t){return n<.2&&!t}function hp(n,t,e){return n.kind==="quiz"?t>.45||e>48:e>72}function up(n,t,e,i){let s=n.def,r=t.x-n.p.x,o=t.z-n.p.z,a=Math.hypot(r,o);if(n.t+=e,n.busy){n.v.x=0,n.v.z=0,n.kind==="villager"&&(n.yaw=Math.atan2(-r,-o));return}if(n.home){let l=n.home.x-n.p.x,c=n.home.z-n.p.z,u=Math.hypot(l,c);if(u>10){n.yaw=Math.atan2(-l,-c),n.v.x=l/u*s.speed,n.v.z=c/u*s.speed,n.t=0,n.turn=1;return}}if(n.kind==="quiz"&&a<16){n.yaw=Math.atan2(-r,-o);let l=a>1.6?s.speed:0;n.v.x=r/(a||1)*l,n.v.z=o/(a||1)*l;return}n.t>=n.turn&&(n.t=0,n.turn=2+i()*4,i()<.35?(n.v.x=0,n.v.z=0):(n.yaw=i()*Math.PI*2,n.v.x=-Math.sin(n.yaw)*s.speed,n.v.z=-Math.cos(n.yaw)*s.speed))}function fp(n,t,e){if(n.kind!=="animal"||n.gone)return null;if(n.hp-=t?n.hp:1,n.hp>0)return{drops:null};n.gone=!0;let i=n.def.drops||{},s=(i.min||1)+Math.floor(e()*((i.max||1)-(i.min||1)+1));return{drops:i.id?{id:i.id,n:s}:null}}var dp=(n,t)=>n?(t?2:1)+1:0;function pp(n,t,e,i,s){let r=[e.x-i/2,e.y,e.z-i/2],o=[e.x+i/2,e.y+s,e.z+i/2],a=[n.x,n.y,n.z],l=[t.x,t.y,t.z],c=0,u=1/0;for(let h=0;h<3;h++){if(Math.abs(l[h])<1e-9){if(a[h]<r[h]||a[h]>o[h])return null;continue}let f=(r[h]-a[h])/l[h],m=(o[h]-a[h])/l[h];if(f>m&&([f,m]=[m,f]),c=Math.max(c,f),u=Math.min(u,m),c>u)return null}return c}function mp(n){return Object.keys(n||{}).filter(t=>n[t]&&!n[t].d).sort((t,e)=>(n[e].u||0)-(n[t].u||0))}var gp=n=>`../hero-island/?map=${encodeURIComponent(n)}&from=world`;function xp(n,t){let e=new Set(t||[]);return(Array.isArray(n)?n:[]).filter(i=>i&&i.id&&!e.has(i.id))}function _p(n,t,e,i,s=()=>64){let r=(t||[]).find(c=>c.map===n.map);if(!r)return{ok:!1,coins:0,items:{},leftovers:{}};let o=r.reward.coins|0,a=Object.assign({},r.reward.items),l={};gs(i,o);for(let c in a){let u=vn(e,c,a[c],s);u&&(l[c]=u)}return{ok:!0,coins:o,items:a,leftovers:l,name_zh:r.name_zh}}function yp(n,t,e){let i=new Set;for(let r of Array.isArray(n)?n:[])r&&r.map&&i.add(r.map);let s=t&&t.defeated;if(s)for(let r of e||[])r.boss&&s[r.boss]&&i.add(r.map);return i}function xu(n,t,e){let i=(t||[]).findIndex(r=>r.map===n);if(i<0)return{ok:!1,need:null};if(i===0)return{ok:!0};let s=t[i-1];return e.has(s.map)?{ok:!0}:{ok:!1,need:s}}function vp(n,t){let e=(n||[]).findIndex(i=>!t.has(i.map));return e<=0?null:xu(n[e].map,n,t).ok?n[e]:null}var pi={};function or(n){return pi[n]||(pi[n]=new Xn({color:n,transparent:!0}),pi[n].userData.base=new se(n)),pi[n]}var co=null;function By(){if(co)return co;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");return t.fillStyle="#26302A",t.fillRect(0,0,64,64),t.fillStyle="#EFEBDD",t.beginPath(),t.ellipse(20,28,8,10,0,0,7),t.ellipse(44,28,8,10,0,0,7),t.fill(),t.fillStyle="#151714",t.beginPath(),t.arc(22,31,4,0,7),t.arc(46,31,4,0,7),t.fill(),t.fillStyle="#E0352B",t.font="bold 18px sans-serif",t.textAlign="center",t.fillText("?",32,58),co=new hi(n),co.colorSpace=rn,co}function Mp(n,t){let e=new Wn,i=n.colors,[s,r]=n.size,o=(l,c,u,h,f,m,x,v)=>{let d=new We(new Rn(l,c,u),v||or(h));return d.position.set(f,m,x),e.add(d),d},a=[];if(n.kind==="villager"){for(let c of[-.13,.13]){let u=o(.2,.6,.22,i.leg,c,.6,0);u.geometry.translate(0,-.6/2,0),a.push(u)}o(.56,.78,.34,t||i.body,0,.6+.39,0);for(let c of[-.36,.36])o(.16,.62,.18,t||i.body,c,1.3399999999999999,0).geometry.translate(0,-.27,0);o(.42,.42,.4,i.head,0,.6+.78+.22,0),o(.5,.1,.48,i.hat,0,.6+.78+.46,0),o(.32,.14,.3,i.hat,0,.6+.78+.56,0),o(.08,.12,.06,"#C9A27A",0,.6+.78+.18,-.22)}else if(n.kind==="quiz"){let l=o(s,r*.72,s*.8,i.body,0,r*.36+.12,0);pi.__face||(pi.__face=new Xn({map:By(),transparent:!0}),pi.__face.userData.base=new se("#ffffff"));let c=[or(i.head),or(i.head),or(i.head),or(i.head),or(i.head),pi.__face],u=new We(new Rn(s*.9,s*.8,s*.8),c);u.position.set(0,r*.72+s*.4,0),e.add(u),a.push(o(.18,.24,.18,i.head,-.2,.12,0),o(.18,.24,.18,i.head,.2,.12,0))}else{let l=n.id==="chicken"?.25:.45,c=r-l-(n.id==="chicken"?.15:.25);o(s,c,n.id==="chicken"?s:s*1.35,i.body,0,l+c/2,0),i.patch&&o(s*.5,c*.55,.02+s*1.36,i.patch,s*.12,l+c*.55,0);let u=n.id==="chicken"?.3:.45,h=o(u,u,u,i.head,0,l+c+u*.25,-(n.id==="chicken"?s*.35:s*.75));i.comb&&(o(.08,.12,.14,i.comb,0,h.position.y+u/2+.05,h.position.z),o(.12,.06,.12,"#D9A63A",0,h.position.y-.02,h.position.z-u/2-.05));let f=n.id==="chicken"?.06:.18,m=n.id==="chicken"?0:s*.45,x=s*.3;for(let[v,d]of n.id==="chicken"?[[-.1,0],[.1,0]]:[[-x,-m],[x,-m],[-x,m],[x,m]]){let p=o(f,l,f,i.leg,v,l/2,d);p.geometry.translate(0,-l/2,0),p.position.y=l,a.push(p)}}return e.userData.legs=a,e}function Sp(n){for(let t in pi){let e=pi[t];e.color.copy(e.userData.base).multiplyScalar(n)}}function _u(n,t,e){n.position.set(t.p.x,t.p.y,t.p.z),n.rotation.y=t.yaw;let i=Math.hypot(t.v.x,t.v.z)>.05,s=i?Math.sin(e*8+t.id)*.5:0;if(n.userData.legs.forEach((r,o)=>{r.rotation.x=o%2?s:-s}),t.kind==="quiz"&&(n.position.y+=Math.sin(e*3+t.id)*.05),t.gone){let r=Math.max(.01,1-t.goneT*3);n.scale.setScalar(r),n.rotation.y+=t.goneT*12}}var Gl="45dd97f129",vu=new URLSearchParams(location.search),Vy=720,wp=5,Gy=20261008,Hy=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,_={touch:Hy,started:!1,paused:!0,overlay:null,p:{x:.5,y:40,z:.5},v:{x:0,y:0,z:0},yaw:0,pitch:-.2,fly:!1,onGround:!1,eyeOff:0,view:"fp",sel:0,time:.08,keys:{},joy:{x:0,y:0,active:!1},jumpHeld:!1,downHeld:!1,mining:{active:!1,src:"center",sx:0,sy:0,k:"",t:0},placeRepeat:0,dirty:new Set,dirtyMeta:!1,frames:[],drops:[]};function Hl(n,t){try{let e=localStorage.getItem(n);return e??t}catch{return t}}function yu(n,t){try{localStorage.setItem(n,t)}catch{}}async function Wy(){let n=Nl(Hl("hw_mode","survival")),t=jd(n);zd(Jd(n));let[e,i,s,r,o,a]=await Promise.all(["data/blocks.json","data/recipes.json","data/mobs.json","data/portals.json","data/structures.json","data/trades.json"].map(g=>fetch(g,{cache:"no-cache"}).then(P=>P.json()))),l=gd(e),c=i.recipes||[],u=g=>l.maxStack(g),h={};try{let[g,P,W,G,J,it,mt,_t,gt]=await Promise.all(["hw_meta","hw_player","hw_inventory","hw_coins","hw_furnaces","hw_portal_claimed","hw_quests","hw_chests","hw_crops"].map(Lh));h={meta:g,player:P,inv:W,coins:G,furnaces:J,claimed:it,quests:mt,chests:_t,crops:gt,chunks:await Vd("hw_chunk:")}}catch(g){console.warn("save unavailable",g)}let f=h.meta&&h.meta.seed||Gy+Oh[n].seedOffset,m=bd(f,l,o),x=Id(Object.fromEntries(Object.entries(h.chunks||{}).map(([g,P])=>[g.slice(9),P]))),v=h.inv?Rl(h.inv):Qr();t.creative&&!h.inv&&tp.forEach((g,P)=>{l.get(g)&&(v.slots[P]={id:g,count:64})});let d=Cd(h.coins),p=hu(h.player&&h.player.hp!=null?h.player.hp:20);_.bed=h.player&&h.player.bed||null;let A=r.portals||[],L=Array.isArray(h.claimed)?h.claimed.slice():[],b=h.furnaces||{},T=h.quests||{},E=Object.fromEntries(Object.entries(h.chests||{}).map(([g,P])=>[g,Rl(P,27)])),D=h.crops||{};_.armor=h.player&&Array.isArray(h.player.armor)?h.player.armor.slice(0,4):[null,null,null,null],_.armorDur=h.player&&Array.isArray(h.player.armorDur)?h.player.armorDur.slice(0,4):[null,null,null,null];let M=i.smelt||[],w=i.fuelPerCoal||4;h.meta&&typeof h.meta.time=="number"&&(_.time=h.meta.time);let C=Ri("#c"),N=new Sl({canvas:C,antialias:!1,powerPreference:"high-performance"});N.setPixelRatio(Math.min(window.devicePixelRatio||1,_.touch?1.5:1.25));let H=new Ar,U=new se("#EFEBDD");H.background=U;let I=new fn(72,1,.08,200);I.rotation.order="YXZ";let B=Ld(l),Y=Dd(l,B),Z=Bd(B.canvas),st=new Worker("assets/hw-worker.js?v="+Gl),O=new Ll({scene:H,mats:Z,reg:l,worker:st,diffs:x,onDirty:g=>_.dirty.add(g)}),ot=Math.max(2,Math.min(6,parseInt(vu.get("rd")||Hl("hw_rd",_.touch?"3":"4"),10)||4));O.setRenderDistance(ot),I.far=ot*16+40,I.updateProjectionMatrix();let nt=await new Promise(g=>{let P=W=>{W.data.type==="ready"&&(st.removeEventListener("message",P),g(W.data.spawn))};st.addEventListener("message",P),st.postMessage({type:"init",seed:f,blocks:e,structures:o,diffs:Object.fromEntries([...x].map(([W,G])=>[W,Rh(G)]))})});h.player?Object.assign(_,{p:{x:h.player.x,y:h.player.y,z:h.player.z},yaw:h.player.yaw||0,pitch:h.player.pitch||0,fly:!!h.player.fly,sel:h.player.sel|0}):(_.p={x:nt.x,y:nt.y,z:nt.z},_.yaw=Math.atan2(-(nt.stele.x+.5-nt.x),-(nt.stele.z+.5-nt.z)),_.pitch=-.15);let Mt=new as(new Ur(new Rn(1.004,1.004,1.004)),new os({color:1382164,transparent:!0,opacity:.45}));Mt.visible=!1,H.add(Mt);let dt=Nd().map(g=>new hi(g)),yt=new We(new Rn(1.01,1.01,1.01),new Xn({map:dt[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));yt.visible=!1,H.add(yt);let bt=(g,P)=>{let W=document.createElement("canvas");W.width=W.height=64;let G=W.getContext("2d");G.fillStyle=g,G.beginPath(),G.arc(32,32,28,0,7),G.fill(),P&&(G.globalCompositeOperation="destination-out",G.beginPath(),G.arc(44,26,24,0,7),G.fill());let J=new hi(W);return J.colorSpace=rn,J},xt=new rs(new Vi({map:bt("#F2C46B"),depthWrite:!1,fog:!1})),q=new rs(new Vi({map:bt("#EDE6D0",!0),depthWrite:!1,fog:!1}));H.add(xt,q);let et=500,pt=new Float32Array(et*6),Lt=new Float32Array(et*3),ut=new Float32Array(et*3);for(let g=0;g<et;g++)ut[g*3]=Math.random()*24-12,ut[g*3+1]=Math.random()*16,ut[g*3+2]=Math.random()*24-12;let Ft=new Qe;Ft.setAttribute("position",new He(pt,3));let Jt=new as(Ft,new os({color:9414574,transparent:!0,opacity:.55,depthWrite:!1}));Jt.frustumCulled=!1,Jt.visible=!1,H.add(Jt);let Gt=new Qe;Gt.setAttribute("position",new He(Lt,3));let $t=new Lr(Gt,new Xs({color:16052712,size:.13,transparent:!0,opacity:.9,depthWrite:!1}));$t.frustumCulled=!1,$t.visible=!1,H.add($t),_.weather=tu();let oe=0;function Wt(g,P,W){if(Jt.visible=W==="rain",$t.visible=W==="snow",!!W){oe+=g;for(let G=0;G<et;G++){let J=ut[G*3],it=ut[G*3+2],mt=W==="rain"?16:1.6,_t=P.y+10-(ut[G*3+1]+oe*mt)%16;if(W==="rain"){let gt=G*6;pt[gt]=pt[gt+3]=P.x+J,pt[gt+2]=pt[gt+5]=P.z+it,pt[gt+1]=_t,pt[gt+4]=_t-.45}else{let gt=G*3,Nt=Math.sin(oe*.8+G)*.4;Lt[gt]=P.x+J+Nt,Lt[gt+1]=_t,Lt[gt+2]=P.z+it+Nt*.6}}(W==="rain"?Ft:Gt).attributes.position.needsUpdate=!0}}let jt=new Wn,ye=(g,P,W,G,J,it,mt)=>{let _t=new We(new Rn(g,P,W),new Xn({color:G}));return _t.position.set(J,it,mt),_t.userData.base=new se(G),jt.add(_t),_t},Ge=ye(.24,.75,.26,"#26302A",-.14,.375,0),Me=ye(.24,.75,.26,"#26302A",.14,.375,0);ye(.56,.7,.3,"#2F5A34",0,1.1,0);let Ee=ye(.18,.66,.2,"#E7CDA6",-.38,1.12,0),V=ye(.18,.66,.2,"#E7CDA6",.38,1.12,0);ye(.46,.42,.42,"#E7CDA6",0,1.66,0),ye(.5,.14,.46,"#151714",0,1.9,.02),ye(.12,.12,.05,"#E0352B",.16,1.92,-.24),[Ge,Me,Ee,V].forEach(g=>{g.geometry.translate(0,-g.geometry.parameters.height/2+.05,0),g.position.y+=g.geometry.parameters.height/2-.05}),jt.visible=!1,H.add(jt);let Ne={},me=g=>Ne[g]||(Ne[g]=(()=>{let P=new Image;P.src=Y[g];let W=new an(P);return W.colorSpace=rn,P.onload=()=>{W.needsUpdate=!0},new Vi({map:W,depthWrite:!0,alphaTest:.3})})());function R(g,P,W,G){let J=new rs(me(g));J.scale.set(.42,.42,1),H.add(J),_.drops.push({id:g,s:J,p:{x:P,y:W,z:G},v:{x:(Math.random()-.5)*2,y:3,z:(Math.random()-.5)*2},age:0})}let y=(g,P,W)=>{let G=O.get(g,P,W);return l.flat.solid[G]===1&&(l.flat.boxes[G]||!0)},X=Object.fromEntries((s.mobs||[]).map(g=>[g.id,g])),j=ap(),lt=new Map,St=0;function wt(g,P){for(let W=61;W>0;W--){let G=O.get(g,W,P);if(l.flat.solid[G])return O.get(g,W+1,P)||O.get(g,W+2,P)?null:{y:W+1,n:G};if(l.flat.liquid[G])return null}return null}function ct(g,P,W,G=7){for(let J=-G;J<=G;J++)for(let it=-G;it<=G;it++)for(let mt=-G;mt<=G;mt++)if(l.flat.lightEmit[O.get(g+mt,P+J,W+it)])return!0;return!1}function ht(g,P,W,G,J){let it=lp(j,g,{x:P+.5,y:W,z:G+.5}),mt=Mp(g,J);return lt.set(it.id,mt),H.add(mt),it}let Tt=new Set;function Yt(){for(let g of m.villages.around(_.p.x-64,_.p.z-64,_.p.x+64,_.p.z+64))if(!(Tt.has(g.id)||!O.ready(g.x,g.z))){Tt.add(g.id);for(let P=0;P<g.villagers;P++){let W=qd(g.id,P,a),G=g.x+(P%2?2:-2),J=g.z+(P-1),it=wt(G,J),mt=ht(X.villager,G,it?it.y:g.y+1,J,W.prof.color);Object.assign(mt,{home:{x:g.x,z:g.z},village:g.id,role:W})}}}function It(g){X.villager&&Yt();let P=Math.random()*Math.PI*2,W=14+Math.random()*14,G=Math.floor(_.p.x+Math.cos(P)*W),J=Math.floor(_.p.z+Math.sin(P)*W);if(!O.ready(G,J))return;let it=wt(G,J);if(it)if(lo(j,"animal")<Vl.animal&&it.n===l.num("grass")&&g>.3){let mt=Object.values(X).filter(Nt=>Nt.kind==="animal"),_t=mt[Math.floor(Math.random()*mt.length)],gt=1+Math.floor(Math.random()*3);for(let Nt=0;Nt<gt&&lo(j,"animal")<Vl.animal;Nt++){let te=G+Nt%2,ue=J+(Nt>>1),Re=wt(te,ue);Re&&ht(_t,te,Re.y,ue)}}else t.quizMobs&&lo(j,"quiz")<Vl.quiz&&cp(g,ct(G,it.y,J))&&X.quizling&&ht(X.quizling,G,it.y,J)}function Ct(g,P,W){St+=g,St>2.5&&_.started&&(St=0,It(P));for(let G=j.list.length-1;G>=0;G--){let J=j.list[G],it=lt.get(J.id),mt=Math.hypot(J.p.x-_.p.x,J.p.z-_.p.z);if(J.gone){J.goneT=(J.goneT||0)+g,_u(it,J,W/1e3),J.goneT>.35&&(H.remove(it),lt.delete(J.id),j.list.splice(G,1));continue}if(hp(J,P,mt)){J.gone=!0,J.goneT=0,J.village&&Tt.delete(J.village);continue}if(!O.ready(J.p.x,J.p.z))continue;up(J,_.p,g,Math.random),J.v.y-=20*g,J.v.y<-20&&(J.v.y=-20);let _t=Tl(J.p,J.v,g,y,{w:Math.min(.9,J.def.size[0]),h:J.def.size[1],canStep:!0,grounded:J.onGround});J.onGround=_t.onGround,l.flat.liquid[O.get(J.p.x,J.p.y+.3,J.p.z)]&&(J.v.y=2),_u(it,J,W/1e3)}Sp(.35+.65*P)}function Xt(g,P,W){let G,J;g==="screen"?(fe.set(P/innerWidth*2-1,-(W/innerHeight)*2+1,.5).unproject(I).sub(I.position).normalize(),G={x:I.position.x,y:I.position.y,z:I.position.z},J={x:fe.x,y:fe.y,z:fe.z}):(G=Ot(),J=qe());let it=g==="screen"?ke("screen",P,W):ke("center"),mt=null,_t=_.view==="tp"&&g==="screen"?8:4.5;it&&(_t=Math.min(_t,it.dist+.5));for(let gt of j.list){if(gt.gone)continue;let Nt=pp(G,J,gt.p,gt.def.size[0],gt.def.size[1]);Nt!=null&&Nt<_t&&(_t=Nt,mt=gt)}return mt}function Zt(){try{return mp(JSON.parse(localStorage.getItem("ke_mistakes")||"{}"))}catch{return[]}}function ie(g){if(g.kind==="villager"){if(!t.trading){tt("\u5275\u9020\u6A21\u5F0F\u88E1\u6751\u6C11\u4E0D\u505A\u751F\u610F\uFF0C\u6771\u897F\u90FD\u5728\u80CC\u5305\u76EE\u9304\u88E1");return}Dt(g);return}if(g.kind==="animal"&&v.slots[_.sel]&&v.slots[_.sel].id==="wheat"){t.consume&&ms(v,_.sel,1),ge();let W=Date.now();g.love=W,tt(`${g.def.name_zh}\u5403\u4E86\u5C0F\u9EA5\uFF0C\u597D\u958B\u5FC3`);let G=qh(j.list,g,W);if(G&&lo(j,"animal")<Xh){let J=ht(g.def,Math.floor((g.p.x+G.p.x)/2),Math.floor(g.p.y),Math.floor((g.p.z+G.p.z)/2));lt.get(J.id).scale.setScalar(.65),g.love=0,G.love=0,tt(`\u751F\u4E86\u4E00\u96BB\u5C0F${g.def.name_zh}\uFF01`),_.stats.bred=(_.stats.bred||0)+1}else G&&tt("\u52D5\u7269\u592A\u591A\u4E86\uFF0C\u5148\u4E0D\u751F");return}if(g.kind==="animal"){let W=v.slots[_.sel],G=!!(W&&l.toolOf(W.id)&&l.toolOf(W.id).type==="sword"),J=fp(g,G,Math.random);if(g.v.y=4,g.v.x+=(g.p.x-_.p.x)*1.5,g.v.z+=(g.p.z-_.p.z)*1.5,G){let it=kl(v,_.sel,l);it.broke&&tt(`\u4F60\u7684${l.name(it.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),ge()}if(J&&J.drops)for(let it=0;it<J.drops.n;it++)R(J.drops.id,g.p.x,g.p.y+.6,g.p.z);return}if(g.busy)return;g.busy=!0,Ze(),document.pointerLockElement&&document.exitPointerLock(),_.overlay="ask";let P=Zt().slice(0,30).sort(()=>Math.random()-.5);Wd(at.ov,{ids:P,onDone:(W,G)=>{if(_.overlay=null,g.busy=!1,W){let J=dp(!0,G);gs(d,J),Rt(),g.gone=!0,g.goneT=0,tt(`\u6253\u6557\u932F\u984C\u602A\uFF01 +${J} \u91D1\u5E63`),_.dirtyMeta=!0,cn(),_.stats.quizWins=(_.stats.quizWins||0)+1}else if(W===!1){let J=_.p.x-g.p.x,it=_.p.z-g.p.z,mt=Math.hypot(J,it)||1;_.v.x=J/mt*7,_.v.z=it/mt*7,_.v.y=4.5,g.p.x-=J/mt*1.5,g.p.z-=it/mt*1.5,tt("\u88AB\u932F\u984C\u602A\u63A8\u958B\u4E86\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01")}}})}let z=(g,P,W)=>O.get(g,P,W),at=Xy();function tt(g){let P=F("div",{class:"toast"},g);at.toasts.append(P),setTimeout(()=>P.remove(),2200)}let At=d.coins;function Rt(){d.coins>At&&wn("coin"),At=d.coins,at.coins.textContent=d.coins}let ft="";function Ht(){let g=mu(p.hp),P=g.join();P!==ft&&(ft=P,at.hearts.innerHTML="",g.forEach(W=>at.hearts.append(F("i",{class:"ht "+W}))))}function Vt(g){if(_.dead||g<=0||!t.damage)return;let P=g,W=ro(_.armor,l);if(g=Hh(g,W),W&&(Gh(_.armor,_.armorDur,l,P).forEach(it=>tt(`\u4F60\u7684${l.name(it)}\u7A7F\u820A\u4E86\uFF0C\u8F15\u8F15\u88C2\u958B\u56C9\u3002\u518D\u505A\u4E00\u4EF6\u65B0\u7684\u5427\uFF01`)),Pi(),_.dirtyMeta=!0),g<=0)return;let G=fu(p,g);Ht(),_.dirtyMeta=!0,wn("hurt"),at.flash.classList.remove("on"),at.flash.offsetWidth,at.flash.classList.add("on"),G&&Te()}function Te(){_.dead=!0,Ze(),document.pointerLockElement&&document.exitPointerLock(),_.overlay="dead";let g=at.ov;g.innerHTML="",g.hidden=!1,g.append(F("div",{class:"panel start"},F("h2",{},"\u4F60\u6688\u5012\u4E86\uFF01"),F("p",{},"\u5225\u64D4\u5FC3\uFF0C\u80CC\u5305\u88E1\u7684\u6771\u897F\u90FD\u9084\u5728\u3002"),F("button",{class:"btn big",onclick:ve},_.bed?"\u56DE\u5230\u5E8A\u908A":"\u56DE\u5230\u51FA\u751F\u9EDE")))}function ve(){let g=pu(_.bed,nt,!!_.bed);_.p={x:g.x,y:g.y,z:g.z},_.v={x:0,y:0,z:0},_.fallTop=g.y,p.hp=20,_.dead=!1,Ht(),Et(),_.dirtyMeta=!0,tt(_.bed?"\u5728\u5E8A\u908A\u9192\u4F86\u4E86":"\u56DE\u5230\u51FA\u751F\u9EDE\u4E86")}function ge(){at.hotbar.innerHTML="";for(let P=0;P<9;P++){let W=v.slots[P];at.hotbar.append(F("button",{class:"slot"+(P===_.sel?" on":""),"aria-label":W?l.name(W.id):"\u7A7A\u683C",onpointerdown:G=>{G.stopPropagation(),_.sel=P,ge()}},W?F("img",{src:Y[W.id],alt:""}):null,W&&W.count>1?F("span",{class:"cnt"},W.count):null,En(W),F("span",{class:"key"},P+1)))}let g=v.slots[_.sel];at.selName.textContent=g?l.name(g.id):""}function En(g){let P=op(g,l);return!P||P.left>=P.max?null:F("span",{class:"dur"+(P.frac<.25?" low":"")},F("i",{style:"width:"+Math.round(P.frac*100)+"%"}))}function Wl(g=4){let P=new Set,W=Math.floor(_.p.x),G=Math.floor(_.p.y),J=Math.floor(_.p.z);for(let it=-g;it<=g;it++)for(let mt=-g;mt<=g;mt++)for(let _t=-g;_t<=g;_t++){let gt=O.get(W+_t,G+it,J+mt);gt&&P.add(l.get(gt).id)}return P}let ar=()=>({near:Wl(),owned:new Set(d.owned)}),ho=-1,Tn=null,_s=null,Ii=g=>g==="inv"?v:g==="chest"?E[_s]:null,lr=(g,P)=>g==="armor"?_.armor[P]?{id:_.armor[P],count:1,dur:_.armorDur[P]}:null:Ii(g).slots[P];function Qn(g,P,W){if(!Tn){lr(g,P)&&(Tn={c:g,i:P}),W();return}let G=Tn;if(Tn=null,G.c===g&&G.i===P){W();return}if(g==="armor"||G.c==="armor"){let[J,it,mt,_t]=g==="armor"?[G.c,G.i,g,P]:[g,P,G.c,G.i];if(J==="armor"){W();return}let gt=Ii(J),Nt=gt.slots[it],te=Nt&&l.get(Nt.id),ue=_.armor[_t];if(Nt&&!(te.armor&&te.armor.slot===_t)){tt("\u9019\u500B\u4E0D\u80FD\u7A7F\u5728\u9019\u88E1"),W();return}let Re=_.armorDur[_t],Je=ue?Number.isFinite(Re)?{id:ue,count:1,dur:Re}:{id:ue,count:1}:null;Nt?(_.armor[_t]=Nt.id,_.armorDur[_t]=Number.isFinite(Nt.dur)?Nt.dur:null,Nt.count>1?(Nt.count--,Je&&vn(gt,ue,1,u)):gt.slots[it]=Je):ue&&(_.armor[_t]=null,_.armorDur[_t]=null,gt.slots[it]=Je),Pi(),_.dirtyMeta=!0,ge(),W();return}G.c===g?Eh(Ii(g),G.i,P,u):Ah(Ii(G.c),G.i,Ii(g),P,u),_.dirtyMeta=!0,ge(),W()}let mi=(g,P,W,G="")=>{let J=lr(g,P),it=Tn&&Tn.c===g&&Tn.i===P;return F("button",{class:"slot"+(it?" pick":"")+G,title:J?l.name(J.id):"",onclick:()=>Qn(g,P,W)},J?F("img",{src:Y[J.id],alt:""}):null,J&&J.count>1?F("span",{class:"cnt"},J.count):null,En(J))},uo=["\u982D","\u8EAB","\u817F","\u8173"];function fo(g){let P=ro(_.armor,l);return F("div",{class:"armor-row"},uo.map((W,G)=>F("div",{class:"armor-slot"},mi("armor",G,g),F("small",{},W))),F("small",{class:"muted"},`\u8B77\u7532 ${P} \u9EDE\uFF08\u53D7\u50B7\u5C11 ${Math.min(80,P*4)}%\uFF09`))}function Pi(){if(at.armor){let g=ro(_.armor,l);at.armor.textContent=g?`\u8B77\u7532 ${g}`:""}}function Qi(){let g=at.ov;g.innerHTML="",g.hidden=!1;let P=E[_s]||(E[_s]=Qr(27)),W=F("div",{class:"inv-grid"});for(let it=0;it<27;it++)W.append(mi("chest",it,Qi));let G=F("div",{class:"inv-grid"});for(let it=9;it<36;it++)G.append(mi("inv",it,Qi));let J=F("div",{class:"inv-grid hbrow"});for(let it=0;it<9;it++)J.append(mi("inv",it,Qi," hb"));return g.append(F("div",{class:"panel inv"},F("div",{class:"p-head"},F("h2",{},"\u7BB1\u5B50"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Et},"\xD7")),F("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u642C\u904E\u53BB\uFF08\u7BB1\u5B50 \u2194 \u80CC\u5305\uFF09\u3002"),W,F("h3",{},"\u80CC\u5305"),G,J)),P}function ti(){let g=at.ov;g.innerHTML="",g.hidden=!1;let P=F("div",{class:"inv-grid"}),W=_t=>mi("inv",_t,ti,_t<9?" hb":"");for(let _t=9;_t<36;_t++)P.append(W(_t));let G=F("div",{class:"inv-grid hbrow"});for(let _t=0;_t<9;_t++)G.append(W(_t));let J=F("div",{class:"craft"},F("h3",{},"\u5408\u6210"));if(t.creative){let _t=F("div",{class:"craft"},F("h3",{},"\u65B9\u584A\u76EE\u9304\uFF08\u7121\u9650\uFF09"),F("p",{class:"muted"},"\u9EDE\u4E00\u4E0B\u5C31\u653E\u9032\u5FEB\u6377\u5217\u76EE\u524D\u9078\u7684\u90A3\u683C\u3002")),gt=F("div",{class:"cat-grid"});Qd(l).forEach(Nt=>gt.append(F("button",{class:"slot",title:l.name(Nt),onclick:()=>{v.slots[_.sel]={id:Nt,count:64},_.dirtyMeta=!0,ge(),ti(),tt(`${l.name(Nt)} \u653E\u9032\u7B2C ${_.sel+1} \u683C`)}},F("img",{src:Y[Nt],alt:""})))),_t.append(gt),g.append(F("div",{class:"panel inv"},F("div",{class:"p-head"},F("h2",{},"\u80CC\u5305\uFF08\u5275\u9020\u6A21\u5F0F\uFF09"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Et},"\xD7")),F("div",{class:"inv-wrap"},F("div",{},F("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002"),P,G),_t)));return}let it=ar(),mt={needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"};c.forEach(_t=>{let gt=Il(v,_t,it),Nt=gt.ok;_t.blueprint&&gt.reason==="blueprint"&&!Object.keys(_t.in).some(te=>te!=="stick"&&jn(v,te)>0)||J.append(F("div",{class:"rcp"+(Nt?"":" no")},F("img",{src:Y[_t.out.id],alt:""}),F("div",{class:"rcp-t"},F("b",{},`${_t.name_zh} \xD7${_t.out.count}`),F("small",{},Object.keys(_t.in).map(te=>`${l.name(te)} ${jn(v,te)}/${_t.in[te]}`).join("\u3001")+(mt[gt.reason]?"\u3000\xB7 "+mt[gt.reason]:""))),F("button",{class:"btn small",onclick:()=>{let te=Th(v,_t,u,ar());te.ok?(tt(`\u505A\u597D\u4E86\uFF1A${_t.name_zh} \xD7${_t.out.count}`),_.dirtyMeta=!0):tt({full:"\u80CC\u5305\u6EFF\u4E86",needs:"\u8981\u7AD9\u5728\u5DE5\u4F5C\u53F0\u65C1\u908A",blueprint:"\u8981\u5148\u5728\u5546\u5E97\u8CB7\u85CD\u5716"}[te.reason]||"\u6750\u6599\u4E0D\u5920"),ti(),ge()}},"\u88FD\u4F5C")))}),g.append(F("div",{class:"panel inv"},F("div",{class:"p-head"},F("h2",{},"\u80CC\u5305"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Et},"\xD7")),F("div",{class:"inv-wrap"},F("div",{},F("p",{class:"muted"},"\u9EDE\u4E00\u683C\u3001\u518D\u9EDE\u53E6\u4E00\u683C\u5C31\u80FD\u4EA4\u63DB\u3002\u6700\u4E0B\u9762\u4E00\u6392\uFF1D\u5FEB\u6377\u5217\u3002\u4E0A\u9762\u662F\u76D4\u7532\uFF1A\u628A\u76D4\u7532\u9EDE\u5230\u5C0D\u7684\u683C\u5B50\u5C31\u7A7F\u4E0A\u3002"),fo(ti),P,G),J)))}let po=Ed(l);function cr(){let g=at.ov;g.innerHTML="",g.hidden=!1;let P=F("div",{class:"shop"}),W=vp(A,S());po.filter(G=>!G.id.startsWith("portal_")||W&&G.id===W.block).forEach(G=>P.append(F("div",{class:"offer"+(G.locked?" locked":"")},F("img",{src:Y[G.id],alt:""}),F("div",{class:"of-t"},F("b",{},`${G.name_zh}${G.qty>1?" \xD7"+G.qty:""}`),F("small",{},G.locked?`\uFF08${G.locked}\uFF09`:`${G.price} \u91D1\u5E63${G.desc?"\u3000"+G.desc:""}`)),ir(d,G.id)?F("span",{class:"owned"},"\u5DF2\u64C1\u6709"):F("button",{class:"btn small",disabled:G.locked?!0:null,onclick:()=>Xl(G)},G.locked?"\u672A\u958B\u653E":"\u8CFC\u8CB7")))),g.append(F("div",{class:"panel"},F("div",{class:"p-head"},F("h2",{},"\u5546\u5E97\u3000",F("span",{class:"coin"}),` ${d.coins}`),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Et},"\xD7")),F("p",{class:"muted"},"\u91D1\u5E63\u600E\u9EBC\u4F86\uFF1F\u53BB\u300C\u7DF4\u7FD2\u77F3\u7891\u300D\u7B54\u82F1\u6587\u984C\uFF1A\u7B54\u5C0D 1 \u679A\u3001\u6253\u5B57\u984C 2 \u679A\u3002"),P))}function Xl(g){let P=Td(d,v,g,u);P.ok?(tt(g.blueprint?`\u62FF\u5230 ${g.name_zh}\uFF01\u53BB\u5DE5\u4F5C\u53F0\u505A\u505A\u770B`:`\u8CB7\u5230 ${g.name_zh} \xD7${g.qty}`),_.dirtyMeta=!0,Rt(),ge(),cn()):tt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",locked:"\u9084\u6C92\u958B\u653E",owned:"\u5DF2\u7D93\u6709\u4E86"}[P.reason]||"\u8CB7\u4E0D\u4E86"),cr()}let ys=null;function vs(){let g=at.ov,P=b[ys]||(b[ys]=su());g.innerHTML="",g.hidden=!1;let W=P.jobs[0],G=F("div",{class:"shop"});M.forEach(it=>{let mt=jn(v,it.in);G.append(F("div",{class:"offer"+(mt?"":" locked")},F("img",{src:Y[it.in],alt:""}),F("div",{class:"of-t"},F("b",{},`${l.name(it.in)} \u2192 ${l.name(it.out)}`),F("small",{},`\u6709 ${mt} \u500B \xB7 \u6BCF\u500B ${it.time} \u79D2`)),F("button",{class:"btn small",onclick:()=>{let _t=ru(P,v,it,w);_t.ok||tt(_t.reason==="fuel"?"\u8981\u653E\u7164\u70AD\u7576\u71C3\u6599":"\u6C92\u6709\u6750\u6599"),_.dirtyMeta=!0,ge(),vs()}},"\u653E\u9032\u53BB")))});let J=Object.values(P.done).reduce((it,mt)=>it+mt,0);g.append(F("div",{class:"panel"},F("div",{class:"p-head"},F("h2",{},"\u7194\u7210"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Et},"\xD7")),F("p",{class:"muted"},`\u71C3\u6599\u9084\u80FD\u71D2 ${Math.max(0,P.fuel-P.jobs.length)} \u500B\uFF08\u80CC\u5305\u7164\u70AD ${jn(v,"coal")}\uFF1B1 \u500B\u7164\u70AD\u71D2 ${w} \u500B\uFF09`),F("div",{class:"furnace-st"},W?`\u6B63\u5728\u71D2\uFF1A${l.name(W.in)}\uFF08\u9084\u8981 ${Math.ceil(W.left)} \u79D2\uFF0C\u6392\u968A ${P.jobs.length} \u500B\uFF09`:"\u7210\u5B50\u7A7A\u8457"),F("div",{class:"row"},F("button",{class:"btn",disabled:J?null:!0,onclick:()=>{let it=au(P,v,u);it&&tt(`\u62FF\u51FA ${it} \u500B`),_.dirtyMeta=!0,ge(),vs()}},`\u62FF\u51FA\u4F86\uFF08${J}\uFF09`)),G))}let mo=null,hr=(g,P)=>{try{return JSON.parse(localStorage.getItem(g)||"null")||P}catch{return P}},S=()=>yp(hr("hw_portal_rewards",[]),hr("hi_save",null),A),k='<svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true"><path d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z" fill="#26302A"/><polygon points="12,30 52,28 54,58 10,60" fill="#E0352B"/><polygon points="12,30 52,28 50,34 14,35" fill="rgba(0,0,0,.15)"/><circle cx="32" cy="44" r="4" fill="#EFEBDD"/><rect x="30" y="44" width="4" height="9" fill="#EFEBDD"/></svg>';function rt(){let g=A.find(J=>J.map===mo),P=at.ov;if(P.innerHTML="",P.hidden=!1,!g){Et();return}let W=Object.keys(g.reward.items).map(J=>`${l.name(J)} \xD7${g.reward.items[J]}`).join("\u3001"),G=xu(g.map,A,S());if(!G.ok){P.append(F("div",{class:"panel start"},F("div",{class:"p-head"},F("h2",{},"\u50B3\u9001\u9580\u30FB"+g.name_zh),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Et},"\xD7")),F("div",{class:"padlock",html:k}),F("p",{class:"big"},`\u5148\u6253\u5012 ${G.need.boss_zh} \u624D\u80FD\u9032\u5165`),F("p",{class:"muted"},`\u5F9E\u300C${G.need.name_zh}\u300D\u50B3\u9001\u9580\u9032\u53BB\uFF0C\u6253\u5012 ${G.need.boss_zh}\uFF0C\u9019\u500B\u50B3\u9001\u9580\u5C31\u6703\u6253\u958B\u3002`),F("div",{class:"row"},F("button",{class:"btn ghost",onclick:Et},"\u77E5\u9053\u4E86"))));return}P.append(F("div",{class:"panel start"},F("div",{class:"p-head"},F("h2",{},"\u50B3\u9001\u9580\u30FB"+g.name_zh),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Et},"\xD7")),F("p",{},`\u7A7F\u904E\u50B3\u9001\u9580\u5230\u52C7\u8005\u5CF6\u7684\u300C${g.name_zh}\u300D\u5192\u96AA\u3002\u6253\u5012\u90A3\u88E1\u7684 Boss\uFF0C\u56DE\u4F86\u53EF\u4EE5\u9818\uFF1A${g.reward.coins} \u91D1\u5E63\u3001${W}\u3002`),F("p",{class:"muted"},"\u4F60\u5728\u65B9\u584A\u4E16\u754C\u7684\u6771\u897F\u90FD\u6703\u81EA\u52D5\u5B58\u597D\u3002"),F("div",{class:"row"},F("button",{class:"btn big",onclick:async()=>{await cn(),_.leaving=gp(g.map),location.href=_.leaving}},"\u9032\u5165"),F("button",{class:"btn ghost",onclick:Et},"\u5148\u4E0D\u8981"))))}function Q(){if(!t.portals)return 0;let g;try{g=JSON.parse(localStorage.getItem("hw_portal_rewards")||"[]")}catch{g=[]}let P=xp(g,L);for(let W of P){let G=_p(W,A,v,d,u);if(L.push(W.id),!!G.ok){for(let J in G.leftovers)for(let it=0;it<G.leftovers[J];it++)R(J,_.p.x,_.p.y+1,_.p.z);tt(`\u5F9E${G.name_zh}\u5E36\u56DE\u4F86\uFF1A${G.coins} \u91D1\u5E63\u3001${Object.keys(G.items).map(J=>l.name(J)+" \xD7"+G.items[J]).join("\u3001")}`)}}return P.length&&(Rt(),ge(),_.dirtyMeta=!0,cn()),P.length}let K=null;function Dt(g){K=g,g.busy=!0,Qt("trade")}function Bt(){let g=K,P=at.ov;if(!g)return Et();P.innerHTML="",P.hidden=!1;let W=g.role,G=Zd(),J=F("div",{class:"shop"});W.prof.offers.forEach(mt=>{let _t=mt.blueprint||mt.give,gt=!!mt.blueprint,Nt=gt&&l.blueprints.find(ue=>ue.id===mt.blueprint),te=gt&&ir(d,mt.blueprint);J.append(F("div",{class:"offer"},F("img",{src:Y[_t],alt:""}),F("div",{class:"of-t"},F("b",{},gt?Nt.name_zh:`${l.name(_t)}${mt.count>1?" \xD7"+mt.count:""}`),F("small",{},`${mt.price} \u91D1\u5E63${gt?"\u3000"+(Nt.desc||""):""}`)),te?F("span",{class:"owned"},"\u5DF2\u64C1\u6709"):F("button",{class:"btn small",onclick:()=>{let ue=Yd(d,v,mt,u);ue.ok?(wn("trade"),tt(gt?`\u62FF\u5230 ${Nt.name_zh}\uFF01`:`\u8CB7\u5230 ${l.name(_t)} \xD7${mt.count}`),_.dirtyMeta=!0,Rt(),ge(),cn()):tt({coins:"\u91D1\u5E63\u4E0D\u5920\uFF0C\u53BB\u77F3\u7891\u7B54\u984C\u6216\u63A5\u82F1\u6587\u59D4\u8A17\u5427\uFF01",full:"\u80CC\u5305\u6EFF\u4E86",owned:"\u5DF2\u7D93\u6709\u4E86"}[ue.reason]||"\u8CB7\u4E0D\u4E86"),Bt()}},"\u8CFC\u8CB7")))});let it=F("div",{class:"quests"});W.quests.forEach(mt=>{let _t=Fh(T,mt,G),gt=Object.keys(mt.reward.items||{}).map(Nt=>`${l.name(Nt)} \xD7${mt.reward.items[Nt]}`).join("\u3001");it.append(F("div",{class:"offer quest"+(_t?" locked":"")},F("div",{class:"of-t"},F("b",{},"\u82F1\u6587\u59D4\u8A17\uFF1A"+mt.title_zh),F("small",{},`${mt.desc}\uFF0C\u7B54\u5C0D ${mt.need} \u984C \u2192 ${mt.reward.coins} \u91D1\u5E63\u3001${gt}`)),_t?F("span",{class:"owned"},"\u4ECA\u5929\u5B8C\u6210\u4E86"):F("button",{class:"btn small",onclick:()=>{_.overlay="quest",Xd(at.ov,{quest:mt,onDone:Nt=>{if(_.overlay="trade",Nt>=0){let te=$d(T,mt,Nt,G,d,v,u);if(te.ok){for(let ue in te.leftovers)for(let Re=0;Re<te.leftovers[ue];Re++)R(ue,_.p.x,_.p.y+1,_.p.z);tt(`\u59D4\u8A17\u5B8C\u6210\uFF01 +${te.coins} \u91D1\u5E63\u3001${gt}`),Rt(),ge(),_.dirtyMeta=!0,cn(),_.stats.quests=(_.stats.quests||0)+1}else tt(`\u7B54\u5C0D ${Nt} \u984C\uFF0C\u8981 ${mt.need} \u984C\u624D\u7B97\u5B8C\u6210\uFF0C\u518D\u8A66\u4E00\u6B21\uFF01`)}Bt()}})}},"\u63A5\u59D4\u8A17")))}),P.append(F("div",{class:"panel"},F("div",{class:"p-head"},F("h2",{},`\u6751\u6C11\u30FB${W.prof.name_zh}\u3000`,F("span",{class:"coin"}),` ${d.coins}`),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Et},"\xD7")),F("h3",{},"\u4EA4\u6613"),J,F("h3",{},"\u82F1\u6587\u59D4\u8A17"),F("p",{class:"muted"},"\u6BCF\u500B\u59D4\u8A17\u6BCF\u5929\u53EF\u4EE5\u9818\u4E00\u6B21\u734E\u3002"),it))}function Pt(){let g=at.ov;g.innerHTML="",g.hidden=!1;let P=F("b",{},O.rd),W=F("input",{type:"range",min:2,max:6,step:1,value:O.rd,oninput:G=>{P.textContent=G.target.value},onchange:G=>{let J=+G.target.value;O.setRenderDistance(J),I.far=J*16+40,I.updateProjectionMatrix(),yu("hw_rd",J)}});g.append(F("div",{class:"panel"},F("div",{class:"p-head"},F("h2",{},"\u8A2D\u5B9A"),F("button",{class:"x","aria-label":"\u95DC\u9589",onclick:Et},"\xD7")),F("label",{class:"set"},"\u8996\u91CE\u8DDD\u96E2\uFF08\u5340\u584A\uFF09",P,W),F("label",{class:"set"},"\u97F3\u6A02",F("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().music:.35,oninput:G=>Bl({music:+G.target.value,muted:!1})})),F("label",{class:"set"},"\u97F3\u6548",F("input",{type:"range",min:0,max:1,step:.05,value:window.HIAudio?HIAudio.get().sfx:.7,oninput:G=>{Bl({sfx:+G.target.value,muted:!1}),wn("place","wood")}})),t.creative?F("label",{class:"set"},"\u5929\u6C23\uFF08\u4E0B\u96E8\u3001\u4E0B\u96EA\uFF09",F("input",{type:"checkbox",checked:Hl("hw_weather","on")!=="off"?!0:null,onchange:G=>yu("hw_weather",G.target.checked?"on":"off")})):null,F("p",{class:"muted"},"iPad \u5EFA\u8B70 3\uFF1B\u5361\u5361\u7684\u5C31\u8ABF\u5C0F\u3002"),F("div",{class:"row"},F("button",{class:"btn ghost",onclick:le},"\u91CD\u7F6E\u4E16\u754C"),t.creative?F("button",{class:"btn",onclick:()=>zt("survival")},"\u56DE\u5230\u751F\u5B58\u6A21\u5F0F"):F("button",{class:"btn",onclick:qt},"\u5275\u9020\u6A21\u5F0F\uFF08\u5BB6\u9577\u5BC6\u78BC\uFF09")),F("div",{id:"pinbox"}),F("p",{class:"muted"},"\u91CD\u7F6E\u4E16\u754C\u6703\u6E05\u6389\u84CB\u597D\u7684\u65B9\u584A\u3001\u80CC\u5305\u548C\u4F4D\u7F6E\uFF1B\u91D1\u5E63\uFF08\u7B54\u984C\u8CFA\u7684\uFF09\u6703\u4FDD\u7559\u3002"),F("p",{},F("a",{class:"home-link",href:"../../#s/game",onclick:()=>{cn()}},"\u2190 \u56DE\u5C0F\u670B\u53CB\u5B78\u7FD2\u7AD9")),F("p",{class:"muted small"},"\u7248\u672C "+Gl)))}async function zt(g){await cn(),yu("hw_mode",g),_.resetting=!0,location.reload()}function qt(){let g=document.getElementById("pinbox"),P=window.KSParentPin;if(g.innerHTML="",!P||!P.isSet()){g.append(F("div",{class:"pin-ask"},F("p",{},"\u5275\u9020\u6A21\u5F0F\u8981\u5BB6\u9577\u540C\u610F\u3002\u8ACB\u7238\u7238\u5ABD\u5ABD\u5148\u5230\u5B78\u7FD2\u7AD9\u7684\u300C\u5BB6\u9577\u300D\u9801\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC\u3002"),F("a",{class:"btn ghost",href:"../../#parent"},"\u524D\u5F80\u5BB6\u9577\u9801")));return}let W=F("input",{class:"typein",type:"password",inputmode:"numeric",pattern:"[0-9]*",maxlength:"6",autocomplete:"off",placeholder:"\u5BB6\u9577\u5BC6\u78BC","aria-label":"\u5BB6\u9577\u5BC6\u78BC"}),G=()=>{let J=Kd(P,W.value.trim());J.ok?zt("creative"):(tt(J.reason==="wrong"?"\u5BC6\u78BC\u4E0D\u5C0D":"\u9084\u6C92\u8A2D\u5B9A\u5BB6\u9577\u5BC6\u78BC"),W.value="")};W.addEventListener("keydown",J=>{J.stopPropagation(),J.key==="Enter"&&G()}),g.append(F("div",{class:"pin-ask"},F("p",{},"\u8ACB\u7238\u7238\u5ABD\u5ABD\u8F38\u5165\u5BB6\u9577\u5BC6\u78BC\uFF1A\u5275\u9020\u6A21\u5F0F\u662F\u53E6\u4E00\u500B\u4E16\u754C\uFF0C\u65B9\u584A\u7121\u9650\u3001\u4E0D\u80FD\u8CFA\u91D1\u5E63\u3002"),F("div",{class:"typerow"},W,F("button",{class:"btn",onclick:G},"\u78BA\u5B9A")))),setTimeout(()=>W.focus(),50)}async function le(){if(confirm("\u78BA\u5B9A\u8981\u91CD\u7F6E\u4E16\u754C\u55CE\uFF1F\u84CB\u597D\u7684\u6771\u897F\u6703\u5168\u90E8\u6D88\u5931\uFF08\u91D1\u5E63\u4FDD\u7559\uFF09\u3002")){_.resetting=!0;try{await Gd(["hw_coins"])}catch(g){console.warn(g)}location.reload()}}function Qt(g){document.pointerLockElement&&document.exitPointerLock(),_.overlay=g,Ze(),g==="inv"?(ho=-1,Tn=null,ti()):g==="shop"?cr():g==="set"?Pt():g==="furnace"?vs():g==="portal"?rt():g==="trade"?Bt():g==="chest"?(Tn=null,Qi()):g==="quiz"&&Hd(at.ov,{onReward:P=>{gs(d,P),Rt(),_.dirtyMeta=!0,cn()},onClose:()=>{_.overlay=null}})}function Et(){at.ov.hidden=!0,at.ov.innerHTML="",_.overlay=null,K&&(K.busy=!1,K=null)}let _e=()=>{at.btnSnd.textContent=oo()?"\u{1F507}":"\u{1F50A}"};at.btnSnd.onclick=()=>{Fl(),$h(),_e()},["pointerdown","keydown"].forEach(g=>addEventListener(g,()=>Fl(),{capture:!0,once:!0})),_e(),at.btnInv.onclick=()=>_.overlay==="inv"?Et():Qt("inv"),at.btnShop.onclick=()=>_.overlay==="shop"?Et():Qt("shop"),at.btnSet.onclick=()=>_.overlay==="set"?Et():Qt("set"),at.btnView.onclick=()=>ze();function ze(){_.view=_.view==="fp"?"tp":"fp",tt(_.view==="fp"?"\u7B2C\u4E00\u4EBA\u7A31":"\u7B2C\u4E09\u4EBA\u7A31")}function Ae(){_.fly=!_.fly,_.v.y=0,at.root.classList.toggle("flying",_.fly),tt(_.fly?"\u98DB\u884C\uFF1A\u958B\uFF08\u8DF3\uFF1D\u4E0A\u5347\u3001\u4E0B\uFF1D\u4E0B\u964D\uFF09":"\u98DB\u884C\uFF1A\u95DC")}let fe=new $;function qe(){let g=Math.cos(_.pitch);return{x:-Math.sin(_.yaw)*g,y:Math.sin(_.pitch),z:-Math.cos(_.yaw)*g}}let Ot=()=>({x:_.p.x,y:_.p.y+1.62+_.eyeOff,z:_.p.z}),nn=g=>g&&!l.flat.liquid[g],de=g=>l.flat.boxes[g];function ke(g,P,W){if(g==="screen"){fe.set(P/innerWidth*2-1,-(W/innerHeight)*2+1,.5).unproject(I).sub(I.position).normalize();let mt=I.position,_t=_.view==="tp"?mt.distanceTo(new $(_.p.x,_.p.y+1.62,_.p.z)):0,gt={x:mt.x,y:mt.y,z:mt.z},Nt={x:fe.x,y:fe.y,z:fe.z},te=Al(gt,Nt,wp+1+_t,z,nn,de);return te&&(te.at={x:gt.x+Nt.x*te.dist,y:gt.y+Nt.y*te.dist,z:gt.z+Nt.z*te.dist}),te}let G=Ot(),J=qe(),it=Al(G,J,wp,z,nn,de);return it&&(it.at={x:G.x+J.x*it.dist,y:G.y+J.y*it.dist,z:G.z+J.z*it.dist}),it}function Ze(){_.mining.active=!1,_.mining.k="",_.mining.t=0,yt.visible=!1}function ei(g,P,W){wn("door");let G=l.get(O.get(g,P,W)),J=l.get(G.openAs||G.closeAs);if(!J)return;let it=_t=>{let gt=l.get(_t);return gt&&gt.interact==="door"},mt=P;for(;it(O.get(g,mt-1,W));)mt--;for(let _t=mt;it(O.get(g,_t,W));_t++)O.set(g,_t,W,J.n);_.dirtyMeta=!0}let gi=()=>{let g=v.slots[_.sel];return g?l.toolOf(g.id):null};function be(g){let P=g.n,W=t.creative?{time:t.breakTime,harvest:!1,usesTool:!1,creative:!0}:zl(l.get(P),gi());if(!O.set(g.x,g.y,g.z,0))return;let G=g.x+","+g.y+","+g.z,J=l.get(P);if(E[G]){if(t.drops){for(let gt of E[G].slots)if(gt)for(let Nt=0;Nt<gt.count;Nt++)R(gt.id,g.x+.5,g.y+.4,g.z+.5)}delete E[G]}if(J&&J.crop){if(delete D[G],t.drops)for(let gt of kh(J.stage|0))for(let Nt=0;Nt<gt.n;Nt++)R(gt.id,g.x+.5,g.y+.3,g.z+.5);_.stats.harvested=(_.stats.harvested||0)+(J.stage===3?1:0),_.dirtyMeta=!0;return}let it=W.harvest?l.dropOf(P):null;it?R(it,g.x+.5,g.y+.4,g.z+.5):!W.harvest&&!W.creative&&tt(`${l.name(P)}\u8981\u7528\u66F4\u597D\u7684\u5DE5\u5177\u6316\uFF0C\u624D\u6703\u6389\u6771\u897F`);let mt=O.get(g.x,g.y+1,g.z);if(l.flat.plant[mt]){delete D[g.x+","+(g.y+1)+","+g.z],O.set(g.x,g.y+1,g.z,0);let gt=t.drops&&l.dropOf(mt);gt&&R(gt,g.x+.5,g.y+1.3,g.z+.5)}if(l.get(P).interact==="door")for(let gt of[-1,1]){let Nt=O.get(g.x,g.y+gt,g.z);l.get(Nt)&&l.get(Nt).interact==="door"&&O.set(g.x,g.y+gt,g.z,0)}let _t=g.x+","+g.y+","+g.z;if(_.bed&&_.bed.x===g.x&&_.bed.y===g.y&&_.bed.z===g.z&&(_.bed=null,tt("\u5E8A\u62C6\u6389\u4E86\uFF0C\u91CD\u751F\u9EDE\u6539\u56DE\u51FA\u751F\u9EDE")),b[_t]){let gt=lu(b[_t]);for(let Nt in gt)for(let te=0;te<gt[Nt];te++)R(Nt,g.x+.5,g.y+.4,g.z+.5);delete b[_t]}if(W.usesTool){let gt=kl(v,_.sel,l);gt.broke&&tt(`\u4F60\u7684${l.name(gt.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`),ge()}_.dirtyMeta=!0,_.stats.mined++,wn("break",rr(J))}function Le(g){let P=v.slots[_.sel],W=P&&l.get(P.id);if(W&&W.food)return t.damage?(Wh(p,W.food,20)?(wn("eat"),ms(v,_.sel,1),Ht(),ge(),_.dirtyMeta=!0,tt(`\u5403\u4E86${W.name_zh}\uFF0C\u597D\u98FD\uFF01`),_.stats.ate=(_.stats.ate||0)+1):tt("\u73FE\u5728\u4E0D\u9913"),!0):(tt("\u5275\u9020\u6A21\u5F0F\u4E0D\u6703\u9913"),!0);if(!g)return!1;let G=l.get(g.n);if(G&&G.interact==="chest")return wn("chest"),_s=g.x+","+g.y+","+g.z,Qt("chest"),!0;let J=W&&l.toolOf(P.id);if(J&&J.type==="hoe"&&zh(G.id,!O.get(g.x,g.y+1,g.z)||l.flat.plant[O.get(g.x,g.y+1,g.z)])){if(O.set(g.x,g.y+1,g.z,0),O.set(g.x,g.y,g.z,l.num("farmland")),t.consume){let ae=kl(v,_.sel,l);ae.broke&&tt(`\u4F60\u7684${l.name(ae.id)}\u7528\u58DE\u4E86\uFF0C\u518D\u505A\u4E00\u628A\u5427\uFF01`)}return ge(),_.dirtyMeta=!0,!0}if(W&&W.place==="crop")return G.id!=="farmland"||g.face[1]!==1||O.get(g.x,g.y+1,g.z)?(tt("\u7A2E\u5B50\u8981\u7A2E\u5728\u8015\u5730\u4E0A\uFF08\u5148\u7528\u92E4\u982D\u92E4\u5730\uFF09"),!1):(O.set(g.x,g.y+1,g.z,l.num("wheat_0")),D[g.x+","+(g.y+1)+","+g.z]={t:Date.now(),wet:Vh(z,ae=>l.flat.liquid[ae]===1,g.x,g.y,g.z)},t.consume&&ms(v,_.sel,1),ge(),_.dirtyMeta=!0,_.stats.planted=(_.stats.planted||0)+1,!0);let it=l.get(g.n);if(it&&it.interact==="quiz")return t.coins?(Qt("quiz"),!0):(tt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u8CFA\u91D1\u5E63\uFF0C\u56DE\u751F\u5B58\u6A21\u5F0F\u518D\u4F86\u7B54\u984C\u5427"),!0);let mt=v.slots[_.sel]&&l.get(v.slots[_.sel].id).placeable;if(it&&it.interact==="door")return ei(g.x,g.y,g.z),!0;if(it&&it.interact==="portal"&&!mt&&!t.portals)return tt("\u5275\u9020\u6A21\u5F0F\u4E0D\u80FD\u9032\u50B3\u9001\u9580"),!0;if(it&&it.interact==="portal"&&!mt)return mo=it.portal,Qt("portal"),!0;if(it&&it.interact==="bed"&&!mt)return _.bed={x:g.x,y:g.y,z:g.z},_.dirtyMeta=!0,tt("\u91CD\u751F\u9EDE\u8A2D\u597D\u4E86\uFF1A\u6688\u5012\u6703\u56DE\u5230\u9019\u5F35\u5E8A"),!0;if(it&&it.interact==="craft"&&!mt)return Qt("inv"),!0;if(it&&it.interact==="furnace"&&!mt)return ys=g.x+","+g.y+","+g.z,Qt("furnace"),!0;let _t=v.slots[_.sel];if(!_t)return tt("\u5FEB\u6377\u5217\u9019\u683C\u662F\u7A7A\u7684"),!1;let gt=l.get(_t.id);if(!gt||!gt.placeable)return tt(`${l.name(_t.id)} \u4E0D\u80FD\u653E`),!1;if(gt.place==="slab"&&gt.fullAs&&g.n===gt.n&&g.face[1]===1&&O.set(g.x,g.y,g.z,l.num(gt.fullAs)))return t.consume&&ms(v,_.sel,1),ge(),_.stats.placed++,_.dirtyMeta=!0,!0;let Nt=l.flat.plant[g.n]&&!l.flat.plant[gt.n],te=Nt?g.x:g.x+g.face[0],ue=Nt?g.y:g.y+g.face[1],Re=Nt?g.z:g.z+g.face[2];if(ue<0||ue>=64)return!1;let Je=O.get(te,ue,Re);if(Je&&!l.flat.liquid[Je]&&!(Nt&&l.flat.plant[Je]))return!1;let Ue=.6/2;if(gt.solid&&te+1>_.p.x-Ue&&te<_.p.x+Ue&&Re+1>_.p.z-Ue&&Re<_.p.z+Ue&&ue+1>_.p.y&&ue<_.p.y+1.8)return!1;if(l.flat.plant[gt.n]&&!l.flat.solid[O.get(te,ue-1,Re)])return tt(`${gt.name_zh}\u8981\u7A2E\u5728\u5730\u4E0A`),!1;let Ie=gt.n;if(gt.place==="slab"){let ae=g.at?g.at.y-Math.floor(g.at.y):0;(g.face[1]===-1||g.face[1]===0&&ae>.5)&&l.get(gt.id+"_top")&&(Ie=l.num(gt.id+"_top"))}else if(gt.place==="stairs"){let ae=-Math.sin(_.yaw),De=-Math.cos(_.yaw),Ke=Math.abs(ae)>Math.abs(De)?ae>0?1:3:De>0?2:0,je=l.get(gt.id+["","_e","_s","_w"][Ke]);je&&(Ie=je.n)}return O.set(te,ue,Re,Ie)?(wn("place",rr(gt)),gt.interact==="door"&&!O.get(te,ue+1,Re)&&O.set(te,ue+1,Re,gt.n),t.consume&&ms(v,_.sel,1),_.dirtyMeta=!0,ge(),_.stats.placed++,!0):!1}addEventListener("keydown",g=>{if(g.target&&g.target.tagName==="INPUT")return;let P=g.key.toLowerCase();if(P==="e"){_.overlay==="inv"?Et():!_.overlay&&Qt("inv"),g.preventDefault();return}if(_.overlay!=="dead"&&!(_.overlay==="ask"||_.overlay==="quest")){if(P==="escape"&&_.overlay){_.overlay==="quiz"?(at.ov.hidden=!0,at.ov.innerHTML="",_.overlay=null):Et();return}_.overlay||(_.keys[P]=!0,g.code==="Space"&&(_.keys[" "]=!0,g.preventDefault()),P>="1"&&P<="9"&&(_.sel=+P-1,ge()),P==="f"&&Ae(),P==="v"&&ze())}}),addEventListener("keyup",g=>{_.keys[g.key.toLowerCase()]=!1,g.code==="Space"&&(_.keys[" "]=!1)}),addEventListener("blur",()=>{_.keys={},Ze()}),C.addEventListener("mousedown",g=>{if(!(_.touch||_.overlay)){if(document.pointerLockElement!==C){C.requestPointerLock&&C.requestPointerLock();return}if(g.button===0){let P=Xt("center");if(P){ie(P);return}_.mining.active=!0,_.mining.src="center"}g.button===2&&(Le(ke("center")),_.placeRepeat=.3,_.rightHeld=!0)}}),addEventListener("mouseup",g=>{g.button===0&&Ze(),g.button===2&&(_.rightHeld=!1)}),C.addEventListener("contextmenu",g=>g.preventDefault()),addEventListener("mousemove",g=>{document.pointerLockElement===C&&(_.yaw-=g.movementX*.0024,_.pitch=Math.max(-1.55,Math.min(1.55,_.pitch-g.movementY*.0024)))}),addEventListener("wheel",g=>{_.overlay||_.touch||(_.sel=(_.sel+(g.deltaY>0?1:8))%9,ge())},{passive:!0}),document.addEventListener("pointerlockchange",()=>{at.root.classList.toggle("locked",document.pointerLockElement===C)});let Mn=new Map;function Ce(g){_.touch!==g&&(_.touch=g,at.root.classList.toggle("touch",g),document.body.classList.toggle("is-touch",g))}at.root.classList.toggle("touch",_.touch),document.body.classList.toggle("is-touch",_.touch),C.addEventListener("pointerdown",g=>{if(g.pointerType!=="touch"||(Ce(!0),_.overlay))return;if(g.preventDefault(),g.clientX<innerWidth*.4&&g.clientY>innerHeight*.35&&!_.joy.active){_.joy={x:0,y:0,active:!0,id:g.pointerId,ox:g.clientX,oy:g.clientY},at.joy.style.transform=`translate(${g.clientX-60}px, ${g.clientY-60}px)`,at.joy.hidden=!1,at.knob.style.transform="translate(0px,0px)",Mn.set(g.pointerId,{kind:"joy"});return}let P={kind:"look",x:g.clientX,y:g.clientY,sx:g.clientX,sy:g.clientY,t0:performance.now(),drag:!1,hold:!1};P.timer=setTimeout(()=>{P.drag||(P.hold=!0,_.mining.active=!0,_.mining.src="screen",_.mining.sx=P.x,_.mining.sy=P.y)},280),Mn.set(g.pointerId,P)},{passive:!1}),addEventListener("pointermove",g=>{let P=Mn.get(g.pointerId);if(!P)return;if(P.kind==="joy"){let J=g.clientX-_.joy.ox,it=g.clientY-_.joy.oy,mt=Math.hypot(J,it),_t=55;mt>_t&&(J*=_t/mt,it*=_t/mt),_.joy.x=J/_t,_.joy.y=it/_t,at.knob.style.transform=`translate(${J}px,${it}px)`;return}let W=g.clientX-P.x,G=g.clientY-P.y;P.x=g.clientX,P.y=g.clientY,!P.drag&&Math.hypot(P.x-P.sx,P.y-P.sy)>12&&(P.drag=!0,clearTimeout(P.timer),P.hold&&(Ze(),P.hold=!1)),P.drag?(_.yaw-=W*.0055,_.pitch=Math.max(-1.55,Math.min(1.55,_.pitch-G*.0055))):P.hold&&(_.mining.sx=P.x,_.mining.sy=P.y)});let On=g=>{let P=Mn.get(g.pointerId);if(P){if(Mn.delete(g.pointerId),P.kind==="joy"){_.joy={x:0,y:0,active:!1},at.joy.hidden=!0;return}if(clearTimeout(P.timer),P.hold)Ze();else if(!P.drag&&performance.now()-P.t0<280&&!_.overlay){let W=Xt("screen",P.x,P.y);W?ie(W):Le(ke("screen",P.x,P.y))}}};addEventListener("pointerup",On),addEventListener("pointercancel",On);let xi=(g,P,W)=>{g.addEventListener("pointerdown",G=>{G.preventDefault(),G.stopPropagation(),P()}),g.addEventListener("pointerup",W),g.addEventListener("pointercancel",W),g.addEventListener("pointerleave",W)};xi(at.bJump,()=>{_.jumpHeld=!0},()=>{_.jumpHeld=!1}),xi(at.bDown,()=>{_.downHeld=!0},()=>{_.downHeld=!1}),at.bFly.addEventListener("pointerdown",g=>{g.preventDefault(),g.stopPropagation(),Ae()}),at.bPlace.addEventListener("pointerdown",g=>{g.preventDefault(),g.stopPropagation(),Le(ke("center"))}),document.addEventListener("touchmove",g=>{g.target.closest(".scroll, .panel")||g.preventDefault()},{passive:!1}),["gesturestart","gesturechange","dblclick"].forEach(g=>document.addEventListener(g,P=>P.preventDefault(),{passive:!1})),at.start.hidden=!1,at.go.onclick=()=>{at.start.hidden=!0,_.started=!0,_.paused=!1,at.root.classList.add("started"),!_.touch&&C.requestPointerLock&&C.requestPointerLock()};async function cn(){if(_.resetting)return;let g={hw_meta:{v:1,seed:f,time:_.time,build:Gl},hw_player:{x:_.p.x,y:_.p.y,z:_.p.z,yaw:_.yaw,pitch:_.pitch,fly:_.fly,sel:_.sel,hp:p.hp,bed:_.bed,armor:_.armor,armorDur:_.armorDur},hw_inventory:no(v),hw_coins:Ad(d),hw_furnaces:b,hw_chests:Object.fromEntries(Object.entries(E).map(([P,W])=>[P,no(W)])),hw_crops:D,hw_quests:T,hw_portal_claimed:L.slice(-200)};for(let P of _.dirty){let W=x.get(P);W&&(g["hw_chunk:"+P]=Rh(W))}_.dirty.clear(),_.dirtyMeta=!1;try{await Dh(g),_.lastSave=Date.now()}catch(P){console.warn("save failed",P)}}setInterval(()=>{_.started&&cn()},8e3),document.addEventListener("visibilitychange",()=>{document.hidden&&_.started&&cn()}),addEventListener("pagehide",()=>{_.started&&cn()}),_.stats={mined:0,placed:0};function Mu(){let g=innerWidth,P=innerHeight;N.setSize(g,P,!1),I.aspect=g/P,I.updateProjectionMatrix()}addEventListener("resize",Mu),Mu(),Rt(),ge(),Ht(),Pi(),t.creative&&(Ri("#coinpill").hidden=!0,Ri("#modebadge").hidden=!1,at.btnShop.hidden=!0,at.hearts.hidden=!0),Q(),addEventListener("pageshow",g=>{g.persisted&&Q()});let Su=performance.now(),go=0,ql=0,Ep=new se("#EFEBDD"),Tp=new se("#22302F"),Ap=new se("#E6B48C");function bu(g){requestAnimationFrame(bu);let P=(g-Su)/1e3;Su=g;let W=Math.min(.05,P);_.frames.push(P*1e3),_.frames.length>4e3&&_.frames.shift(),O.update(_.p.x,_.p.z);let G=O.ready(_.p.x,_.p.z);_.auto&&Pp(W),_.started&&!_.overlay&&G&&Rp(W),_.started&&!_.dead&&du(p,W)&&(Ht(),_.dirtyMeta=!0),_.time=(_.time+W/Vy)%1;let J=_.time*Math.PI*2,it=Math.sin(J),mt=Math.min(1,Math.max(0,(it+.12)/.42));U.copy(Tp).lerp(Ep,mt);let _t=Math.max(0,1-Math.abs(it)/.3)*(mt>.05?1:.4);if(U.lerp(Ap,_t*.55),!(t.creative&&Hl("hw_weather","on")==="off")?eu(_.weather,W):_.weather.level=0,_.ambT=(_.ambT||0)+W,_.ambT>1){_.ambT=0;let Ie=Math.floor(_.p.x),ae=Math.floor(_.p.z),De=!1;for(let je=2;je<14&&!De;je++)l.flat.opaque[O.get(Ie,Math.floor(_.p.y)+je,ae)]&&(De=!0);_.underground=De&&_.p.y<m.height(Ie,ae)-4,_.biome=m.biomeOf(Ie,ae);let Ke=jh({day:mt,underground:_.underground});Ke!==_.musicScene&&(_.musicScene=Ke,Zh(Qh[Ke]))}let Nt=_.underground?null:nu(_.biome,_.weather),te=Nt?_.weather.level:0;te&&U.lerp(_.rainSky||(_.rainSky=new se("#8E9590")),.45*te),Wt(W,I.position,Nt),Jh(Nt==="rain"?te:0),Ki(_.overlay==="quiz"||_.overlay==="ask"||_.overlay==="quest"),Z.uniforms.uDay.value=mt*(1-.3*te),Z.uniforms.uFog.value.set(...Cp(U));let ue=Ot();_.eyeOff*=Math.pow(5e-4,W);let Re=qe();if(_.view==="tp"){let Ie=Al(ue,{x:-Re.x,y:-Re.y,z:-Re.z},4,z,De=>l.flat.opaque[De]===1),ae=Ie?Math.max(.4,Ie.dist-.25):4;I.position.set(ue.x-Re.x*ae,ue.y-Re.y*ae,ue.z-Re.z*ae)}else I.position.set(ue.x,ue.y,ue.z);I.rotation.set(_.pitch,_.yaw,0);let Je=I.far*.8;if(xt.position.set(I.position.x+Math.cos(J)*Je,I.position.y+Math.sin(J)*Je,I.position.z+.25*Je),xt.scale.setScalar(Je*.14),q.position.set(I.position.x-Math.cos(J)*Je,I.position.y-Math.sin(J)*Je,I.position.z-.25*Je),q.scale.setScalar(Je*.1),jt.visible=_.view==="tp",jt.visible){jt.position.set(_.p.x,_.p.y,_.p.z),jt.rotation.y=_.yaw;let Ie=Math.hypot(_.v.x,_.v.z),ae=Math.sin(g/120)*Math.min(1,Ie/4)*.7;Ge.rotation.x=ae,Me.rotation.x=-ae,Ee.rotation.x=-ae,V.rotation.x=ae;let De=.35+.65*mt;jt.children.forEach(Ke=>Ke.material.color.copy(Ke.userData.base).multiplyScalar(De))}for(let Ie in Ne)Ne[Ie].color.setScalar(.4+.6*mt);let Ue=_.started&&!_.overlay?_.mining.active&&_.mining.src==="screen"?ke("screen",_.mining.sx,_.mining.sy):ke("center"):null;if(Ue){Mt.visible=!0;let Ie=l.flat.boxes[Ue.n];if(Ie){let ae=1,De=1,Ke=1,je=0,Bn=0,mn=0;for(let _i of Ie)ae=Math.min(ae,_i[0]),De=Math.min(De,_i[1]),Ke=Math.min(Ke,_i[2]),je=Math.max(je,_i[3]),Bn=Math.max(Bn,_i[4]),mn=Math.max(mn,_i[5]);Mt.scale.set(je-ae,Bn-De,mn-Ke),Mt.position.set(Ue.x+(ae+je)/2,Ue.y+(De+Bn)/2,Ue.z+(Ke+mn)/2)}else Mt.scale.set(1,1,1),Mt.position.set(Ue.x+.5,Ue.y+.5,Ue.z+.5)}else Mt.visible=!1;if(_.mining.active&&Ue){let Ie=Ue.x+","+Ue.y+","+Ue.z;Ie!==_.mining.k&&(_.mining.k=Ie,_.mining.t=0),_.mining.t+=W;let ae=t.creative?l.get(Ue.n).hardness<0?1/0:t.breakTime:zl(l.get(Ue.n),gi()).time;if(ae===1/0)yt.visible=!1,_.mining.warned||(tt(l.name(Ue.n)+"\u6316\u4E0D\u52D5"),_.mining.warned=!0);else{_.mining.tick=(_.mining.tick||0)+W,_.mining.tick>.25&&(_.mining.tick=0,wn("hit",rr(l.get(Ue.n))));let De=_.mining.t/ae;yt.visible=!0,yt.position.copy(Mt.position),yt.scale.copy(Mt.scale),yt.material.map=dt[Math.min(3,Math.floor(De*4))],De>=1&&(be(Ue),_.mining.k="",_.mining.t=0,yt.visible=!1)}}else yt.visible=!1,_.mining.active||(_.mining.warned=!1);if(_.rightHeld&&!_.overlay&&(_.placeRepeat-=W,_.placeRepeat<=0&&(Le(ke("center")),_.placeRepeat=.25)),Ip(W),_.cropT=(_.cropT||0)+W,_.cropT>2){_.cropT=0;let Ie=Date.now();for(let ae in D){let[De,Ke,je]=ae.split(",").map(Number);if(!O.ready(De,je))continue;let Bn=l.get(O.get(De,Ke,je));if(!Bn||!Bn.crop){delete D[ae];continue}let mn=Bh(D[ae].t,Ie,D[ae].wet);mn>(Bn.stage|0)&&(O.set(De,Ke,je,l.num("wheat_"+mn)),_.dirtyMeta=!0)}}Ct(_.overlay?0:W,mt,g);for(let Ie in b){let ae=b[Ie];ae.jobs.length&&(ou(ae,W),_.dirtyMeta=!0,_.overlay==="furnace"&&Ie===ys&&(_.furnUi=(_.furnUi||0)+W)>.5&&(_.furnUi=0,vs()))}N.render(H,I),go+=P,ql++,go>.5&&(at.dbg&&(at.dbg.textContent=`${Math.round(ql/go)} fps \xB7 \u5340\u584A ${O.stats.loaded} \xB7 ${Sd[m.biomeOf(Math.floor(_.p.x),Math.floor(_.p.z))]} \xB7 ${_.p.x.toFixed(1)}, ${_.p.y.toFixed(1)}, ${_.p.z.toFixed(1)}`),go=0,ql=0),!G&&_.started?at.loading.hidden=!1:at.loading.hidden=!0}function Cp(g){let P=g.getHexString();return[parseInt(P.slice(0,2),16)/255,parseInt(P.slice(2,4),16)/255,parseInt(P.slice(4,6),16)/255]}function Rp(g){let P=_.keys,W=(P.d?1:0)-(P.a?1:0),G=(P.w?1:0)-(P.s?1:0);_.joy.active&&(W=_.joy.x,G=-_.joy.y);let J=Math.min(1,Math.hypot(W,G));if(J>0){let mn=Math.hypot(W,G);W=W/mn*J,G=G/mn*J}let it=-Math.sin(_.yaw),mt=-Math.cos(_.yaw),_t=Math.cos(_.yaw),gt=-Math.sin(_.yaw),Nt=P.control||!_.fly&&P.shift||_.joy.active&&J>.92,te=z(_.p.x,_.p.y+.1,_.p.z),ue=z(_.p.x,_.p.y+1,_.p.z),Re=l.flat.liquid[te]===1||l.flat.liquid[ue]===1,Je=_.fly?10:Re?2.6:Nt?6.2:4.3,Ue=(it*G+_t*W)*Je,Ie=(mt*G+gt*W)*Je,ae=P[" "]||_.jumpHeld,De=_.fly&&P.shift||_.downHeld;if(_.fly)_.v.x=Ue,_.v.z=Ie,_.v.y=((ae?1:0)-(De?1:0))*8;else{let mn=_.onGround?14:5,_i=1-Math.exp(-mn*g);_.v.x+=(Ue-_.v.x)*_i,_.v.z+=(Ie-_.v.z)*_i,Re?(_.v.y-=9*g,_.v.y<-3&&(_.v.y=-3),ae&&(_.v.y=3.4)):l.flat.climb[te]||l.flat.climb[ue]?(_.v.y=ae||G>.1?3.2:De?-3:Math.max(_.v.y-28*g,-1.5),_.fallTop=_.p.y):(_.v.y-=28*g,_.v.y<-40&&(_.v.y=-40),ae&&_.onGround&&(_.v.y=8.6,_.onGround=!1))}let Ke=_.onGround,je=Tl(_.p,_.v,g,y,{canStep:!_.fly,grounded:_.onGround});if(_.onGround=je.onGround,je.stepped&&(_.eyeOff-=je.stepped),_.fallTop==null||_.fly||Re||_.onGround&&Ke?_.fallTop=_.p.y:_.onGround||(_.fallTop=Math.max(_.fallTop,_.p.y)),_.onGround&&!Ke){let mn=uu(_.fallTop-_.p.y,{water:Re,flying:_.fly});mn&&(Vt(mn),tt("\u54CE\u5440\uFF0C\u6454\u4E86\u4E00\u4E0B")),_.fallTop=_.p.y}let Bn=Math.hypot(_.v.x,_.v.z);_.onGround&&!_.fly&&Bn>1&&(_.stepT=(_.stepT||0)+g*Bn,_.stepT>1.8&&(_.stepT=0,wn("step",rr(l.get(z(_.p.x,_.p.y-.5,_.p.z)))))),_.p.y<-20&&(_.p={x:nt.x,y:nt.y+1,z:nt.z},_.v={x:0,y:0,z:0},_.fallTop=_.p.y)}function Ip(g){let P=_.p.x,W=_.p.y+.9,G=_.p.z;for(let J=_.drops.length-1;J>=0;J--){let it=_.drops[J];it.age+=g;let mt=P-it.p.x,_t=W-it.p.y,gt=G-it.p.z,Nt=Math.hypot(mt,_t,gt);if(Nt<1.5&&it.age>.25&&vn(v,it.id,1,u)===0){H.remove(it.s),_.drops.splice(J,1),_.dirtyMeta=!0,ge(),wn("pickup");continue}if(Nt<4.5&&it.age>.25?(it.v.x=mt/Nt*6,it.v.y=_t/Nt*6,it.v.z=gt/Nt*6,it.p.x+=it.v.x*g,it.p.y+=it.v.y*g,it.p.z+=it.v.z*g):(it.v.y-=18*g,it.v.x*=.9,it.v.z*=.9,Tl(it.p,it.v,g,y,{w:.25,h:.25})),it.age>300){H.remove(it.s),_.drops.splice(J,1);continue}it.s.position.set(it.p.x,it.p.y+.2+Math.sin(it.age*3)*.06,it.p.z)}}_.auto=vu.get("auto")==="walk";let wu=0;function Pp(g){_.started||at.go.click(),wu+=g,_.keys.w=!0,_.keys[" "]=wu%1.6<.15,_.yaw+=g*.08}window.HW={build:Gl,G:_,reg:l,inv:v,wallet:d,world:O,Inv:Ch,Aud:Kh,Amb:iu,chests:E,crops:D,Farm:Yh,clickSlot:Qn,MODE:n,RULE:t,switchMode:zt,questState:T,tradesJson:a,spawnVillagers:Yt,terr:m,claimPortalRewards:Q,portals:A,claimedIds:L,mobS:j,mobDefs:X,spawnMob:ht,hitMob:ie,mobAt:Xt,surfaceY:wt,health:p,hurt:Vt,Health:gu,furnaces:b,Smelt:cu,smeltList:M,recipes:c,craftCtx:ar,breakInfo:zl,start(){at.go.click()},state(){return{pos:{..._.p},coins:d.coins,inv:no(v),loaded:O.stats.loaded,stats:{..._.stats},overlay:_.overlay,fly:_.fly}},lookAt(g,P,W){let G=Ot(),J=g-G.x,it=P-G.y,mt=W-G.z;_.yaw=Math.atan2(-J,-mt),_.pitch=Math.atan2(it,Math.hypot(J,mt))},target(){let g=ke("center");return g&&{x:g.x,y:g.y,z:g.z,n:g.n,face:g.face}},mine(g){g?(_.mining.active=!0,_.mining.src="center"):Ze()},use(){return Le(ke("center"))},key(g,P){_.keys[g]=P},open:Qt,close:Et,save:cn,spawn:nt,perf(){return{frames:_.frames.slice(),meshMs:O.stats.meshMs.slice(),genMs:O.stats.genMs.slice(),loaded:O.stats.loaded}},resetPerf(){_.frames.length=0,O.stats.meshMs.length=0,O.stats.genMs.length=0},ready:()=>O.ready(_.p.x,_.p.z)},requestAnimationFrame(bu)}function Xy(){let n=Ri("#ui"),t=e=>n.querySelector(e);return vu.get("debug")!==null&&(t("#dbg").hidden=!1),{root:n,coins:t("#coins"),armor:t("#armorhud"),hearts:t("#hearts"),flash:Ri("#hurt"),hotbar:t("#hotbar"),selName:t("#selname"),ov:Ri("#ov"),toasts:t("#toasts"),btnInv:t("#b-inv"),btnSnd:t("#b-snd"),btnShop:t("#b-shop"),btnSet:t("#b-set"),btnView:t("#b-view"),joy:t("#joy"),knob:t("#knob"),bJump:t("#b-jump"),bFly:t("#b-fly"),bPlace:t("#b-place"),bDown:t("#b-down"),start:Ri("#start"),go:Ri("#go"),dbg:t("#dbg").hidden?null:t("#dbg"),loading:t("#loading")}}Wy().catch(n=>{console.error(n);let t=document.getElementById("err");t&&(t.hidden=!1,t.textContent="\u8F09\u5165\u5931\u6557\uFF1A"+n.message)});})();
